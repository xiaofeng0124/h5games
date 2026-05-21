interface TrackEvent {
  event: 'click' | 'play' | 'load_success' | 'load_timeout';
  game?: string;
  page?: string;
  ts: number;
  ua?: string;
}

export async function onRequestPost(context: { request: Request; env: { FEEDBACK?: KVNamespace } }): Promise<Response> {
  try {
    const body = await context.request.json() as TrackEvent;
    if (!body.event) {
      return new Response(JSON.stringify({ error: 'Missing event type' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    if (context.env.FEEDBACK) {
      const key = `track:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`;
      await context.env.FEEDBACK.put(key, JSON.stringify({
        event: body.event,
        game: body.game || '',
        page: body.page || '',
        ts: body.ts || Date.now(),
        ua: body.ua || '',
      }), { expirationTtl: 7776000 });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400, headers: { 'Content-Type': 'application/json' },
    });
  }
}
