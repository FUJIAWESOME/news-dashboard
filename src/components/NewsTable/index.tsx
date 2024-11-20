import React from 'react';
import { Table, Button } from 'antd';
import { useNewsStore } from '../../store/useNewsStore';
import { useNavigate } from 'react-router-dom';
import { ColumnsType } from 'antd/es/table';
import Loader from '../../components/Loader';
import styles from './NewsTable.module.scss'
import { INewsItem } from '../../types';
import { PATH } from '../../constants';

interface NewsTableProps {
  news: INewsItem[];
}

const NewsTable: React.FC<NewsTableProps> = ({ news }) => {
  const { visibleColumns, isLoading } = useNewsStore();
  const navigate = useNavigate();

  const handleReadMore = (id: number) => {
    navigate(`${PATH.ARTICLE}/${id}`);
  };

  const columns: ColumnsType<INewsItem> = [
    {
      title: 'Заголовок',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Дата публикации',
      dataIndex: 'publishedAt',
      key: 'publishedAt',
      render: (date: string) => new Date(date).toLocaleDateString(),
      align: 'center',
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
    },
    {
      title: 'Действие',
      key: 'action',
      render: (_, record: INewsItem) => (
        <Button type="link" onClick={() => handleReadMore(record.id)}>
          Читать далее
        </Button>
      ),
      align: 'center',
    },
  ];

  const filteredColumns = columns.filter((column) => visibleColumns.includes(column.key as string));

  return (
    <div>
        {isLoading ? (
          <Loader />
        ) : (
          <Table
            className={styles.table}
            columns={filteredColumns}
            dataSource={news}
            rowKey="id"
          />
        )}
    </div>
  );
};

export default NewsTable;
