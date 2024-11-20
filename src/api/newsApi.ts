import axios from 'axios';
import { NEWS_API } from '../constants';
import { FetchNewsParams, INewsItem, SortBy } from '../types';

const api = axios.create({
  baseURL: NEWS_API.URL,
  headers: { 'X-Api-Key': NEWS_API.KEY },
});

export const fetchNews = async (searchQuery: string, sortOption: SortBy): Promise<INewsItem[]> => {
  const params: FetchNewsParams = {
    sources: 'bbc-news'
  };
  
  if (searchQuery) {
    params['qInTitle'] = searchQuery;
  } 

  if (sortOption) {
    params['sortBy'] = sortOption;
  }

  const response = await api.get(NEWS_API.EVERYTHING_ENDPOINT, {
    params: params,
  });

  return response.data.articles.map((article: INewsItem, index: number) => ({
    key: index,
    id: index,
    title: article.title,
    publishedAt: article.publishedAt,
    description: article.description,
    content: article.content,
  }));
};
