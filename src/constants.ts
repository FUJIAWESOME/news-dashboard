const TABLE_COLUMNS = ['title', 'publishedAt', 'description', 'action'];

const NEWS_API = {
  KEY: 'f610901c4e2f420091b164841d35a5f5',
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
  { label: 'Без сортировки', value: '' },
  { label: 'По релевантности', value: 'relevancy' },
  { label: 'По популярности', value: 'popularity' },
  { label: 'По дате публикации', value: 'publishedAt' },
];

export {
  TABLE_COLUMNS,
  NEWS_API,
  CHECKBOX_OPTIONS,
  SORT_OPTIONS
};