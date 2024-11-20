export enum SortBy {
  WithoutSort = '',
  Relevancy = 'relevancy',
  Popularity = 'popularity',
  PublishedAt = 'publishedAt',
}

export interface INewsItem {
  key: number;
  id: number;
  title: string;
  publishedAt: string;
  description: string;
  content: string;
}

export interface FetchNewsParams {
  qInTitle?: string;
  sortBy?: SortBy;
  sources?: string;
}