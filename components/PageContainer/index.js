import React from 'react';
import styles from './style.module.scss';

const PageContainer = ({ children, ...props }) => {
  return (
    <div className={styles['page-container']} {...props}>
      {children}
    </div>
  );
};

export default PageContainer;
