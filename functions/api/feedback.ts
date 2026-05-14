interface Feedback {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export async function onRequestPost(context: { request: Request; env: { FEEDBACK?: KVNamespace } }): Promise<Response> {
  try {
    const body = await context.request.json() as { name?: string; message?: string };
    const name = body.name?.trim() || 'Anonymous';
    const message = body.message?.trim();

    if (!message || message.length < 2) {
      return new Response(JSON.stringify({ error: 'Message must be at least 2 characters' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }
    if (message.length > 2000) {
      return new Response(JSON.stringify({ error: 'Message too long (max 2000 chars)' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    const entry: Feedback = {
      id: crypto.randomUUID(),
      name,
      message,
      createdAt: new Date().toISOString(),
    };

    if (context.env.FEEDBACK) {
      const existing = await context.env.FEEDBACK.get('all', 'text');
      const list: Feedback[] = existing ? JSON.parse(existing) : [];
      list.unshift(entry);
      // Keep only last 500 messages
      if (list.length > 500) list.length = 500;
      await context.env.FEEDBACK.put('all', JSON.stringify(list));
    }

    return new Response(JSON.stringify({ success: true, id: entry.id }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400, headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function onRequestGet(context: { request: Request; env: { FEEDBACK?: KVNamespace } }): Promise<Response> {
  const url = new URL(context.request.url);
  // Accept password via header (preferred) or query param (legacy)
  const password = context.request.headers.get('X-Admin-Password') || url.searchParams.get('password');

  // Simple password protection
  if (password !== 'chillarcade0124') {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401, headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!context.env.FEEDBACK) {
    return new Response(JSON.stringify({ error: 'Storage not available' }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }

  const existing = await context.env.FEEDBACK.get('all', 'text');
  const list: Feedback[] = existing ? JSON.parse(existing) : [];

  return new Response(JSON.stringify(list), {
    status: 200, headers: { 'Content-Type': 'application/json' },
  });
}
