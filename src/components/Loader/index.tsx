import React from "react";
import { Spin } from 'antd';
import styles from './Loader.module.scss'

const Loader: React.FC = () => {
  return (
    <Spin
      className={styles.loader}
      size="large"
    />
  );
};

export default Loader;