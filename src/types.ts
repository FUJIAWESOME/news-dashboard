export enum SortBy {
  WithoutSort = '',
  Newest = 'newest',
  Oldest = 'oldest',
};

export interface INewsItem {
  key: number;
  id: number;
  title: string;
  publishedAt: string;
  description: string;
  content: string;
};

export interface FetchNewsParams {
  sources?: string;
};