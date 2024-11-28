export interface ResourceContent {
  content: string;
  videoUrl?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'article' | 'video' | 'meditation' | 'exercise';
  tags: string[];
  imageUrl?: string;
  duration?: number;
  isFavorite?: boolean;
}

export interface ResourceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}