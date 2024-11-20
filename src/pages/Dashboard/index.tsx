import React, { useEffect } from 'react';
import { Layout } from 'antd';
import NewsTable from '../../components/NewsTable';
import { fetchNews } from '../../api/newsApi';
import { useNewsStore } from '../../store/useNewsStore';
import Menu from '../../components/Menu';
import ErrorMessage from '../../components/ErrorMessage';
import styles from './Dashboard.module.scss'

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

  useEffect(() => {
    const loadNews = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchNews(searchQuery, sortOption);
        setNews(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadNews();
  }, [searchQuery, sortOption]);

  if (isError) {
    return <ErrorMessage error={'Не удалось загрузить новости'} />
  }

  return (
    <Layout
      className={styles.dashboard}
    >
      <Menu />

      <Layout.Content
        className={styles.layoutContent}
      >
        <NewsTable news={news}/>
      </Layout.Content>
    </Layout>
  );
};

export default Dashboard;
