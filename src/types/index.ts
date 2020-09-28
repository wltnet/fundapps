export interface NewsData {
  loading: boolean;
  data: News;
}

export interface News {
  status: string;
  totalResults: number;
  articles: Articles;
}

export interface Source {
  id: string | null;
  name: string;
}

export interface Article {
  source: Source;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

export type Articles = Article[];
