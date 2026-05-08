export interface Game {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  tags: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  thumbnail?: string;
  iframeUrl?: string;
  guideTitle?: string;
  guideContent?: string;
  instructions?: string;
  featured?: boolean;
  rating?: number;
  playCount?: number;
}

export interface Category {
  name: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
}

export type { Game as default };
