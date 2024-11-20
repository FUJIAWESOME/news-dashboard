import React from "react";
import { Layout, Form } from 'antd';
import SearchInput from "../SearchInput";
import ColumnsSettings from "../ColumnsSettings";
import Sort from "../Sort";
import styles from './Menu.module.scss'

const Menu: React.FC = () => {
  return (
    <Layout.Sider
      width={300}
      theme="light"
      className={styles.sider}
    >
      <Form>
        <SearchInput />
        <ColumnsSettings />
        <Sort />
      </Form>
    </Layout.Sider>
  );
};

export default Menu;