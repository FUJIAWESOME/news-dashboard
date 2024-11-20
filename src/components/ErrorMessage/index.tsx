import React from "react";
import { Alert } from "antd";
import styles from './ErrorMessage.module.scss'

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className={styles.error}>
      <Alert
        message="Ошибка"
        description={error}
        type="error" showIcon
      />
    </div>
  );
};

export default ErrorMessage;