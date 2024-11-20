import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';
import { useNewsStore } from '../../store/useNewsStore';
import ErrorMessage from '../../components/ErrorMessage';
import styles from './Article.module.scss'
import { INewsItem } from '../../types';

const ArticlePage: React.FC = () => {
  const { id } = useParams();
  const { news } = useNewsStore();

  const article = news.find((item: INewsItem) => item.id === Number(id));

  if (!article) {
    return <ErrorMessage error='Статья не найдена' />;
  }

  return (
    <div className={styles.wrapper}>
      <Card
        title={article.title}
      >
        <p>
          <strong>Дата публикации:</strong>
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>

        <p>{article.content || 'Полный текст статьи не доступен.'}</p>
      </Card>
    </div>
  );
};

export default ArticlePage;
