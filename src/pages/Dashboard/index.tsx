import React, { useEffect, useState, useCallback } from 'react';
import { Layout } from 'antd';
import NewsTable from '../../components/NewsTable';
import { fetchNews } from '../../api/newsApi';
import { useNewsStore } from '../../store/useNewsStore';
import Menu from '../../components/Menu';
import ErrorMessage from '../../components/ErrorMessage';
import styles from './Dashboard.module.scss'
import { SortBy } from '../../types';

const Dashboard: React.FC = () => {
  const {
    news,
    setNews,
    searchQuery,
    sortOption,
    setIsLoading,
    isError,
    setIsError
  } = useNewsStore();

  const [displayedNews, setDisplayedNews] = useState(news);

  const loadNews = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await fetchNews();
      setNews(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [setNews, setIsLoading, setIsError]);

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  useEffect(() => {
    let updatedNews = [...news];

    if (searchQuery) {
      updatedNews = updatedNews.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOption) {
      updatedNews.sort((a, b) => {
        const dateA = new Date(a.publishedAt);
        const dateB = new Date(b.publishedAt);

        if (sortOption === SortBy.Newest) {
          return dateB.getTime() - dateA.getTime();
        } else if (sortOption === SortBy.Oldest) {
          return dateA.getTime() - dateB.getTime();
        }

        return 0;
      });
    }

    setDisplayedNews(updatedNews);
  }, [news, searchQuery, sortOption]);

  if (isError) {
    return <ErrorMessage error={'Не удалось загрузить новости'} />;
  }

  return (
    <Layout className={styles.dashboard}>
      <Menu />
      <Layout.Content className={styles.layoutContent}>
        <NewsTable news={displayedNews} />
      </Layout.Content>
    </Layout>
  );
};

export default Dashboard;