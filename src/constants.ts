import { SortBy } from "./types";

const TABLE_COLUMNS = ['title', 'publishedAt', 'description', 'action'];

const NEWS_API = {
  KEY: '77fec77183c04172a234da70fc463ec5',
  URL: 'https://newsapi.org/v2',
  EVERYTHING_ENDPOINT: '/everything',
};

const CHECKBOX_OPTIONS = [
  { label: 'Заголовок', value: 'title' },
  { label: 'Дата', value: 'publishedAt' },
  { label: 'Описание', value: 'description' },
  { label: 'Действие', value: 'action' },
];

const SORT_OPTIONS = [
  { label: 'Без сортировки', value: SortBy.WithoutSort },
  { label: 'Самые новые', value: SortBy.Newest },
  { label: 'Самые старые', value: SortBy.Oldest },
];

export {
  TABLE_COLUMNS,
  NEWS_API,
  CHECKBOX_OPTIONS,
  SORT_OPTIONS
};