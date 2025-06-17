export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  icon?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}