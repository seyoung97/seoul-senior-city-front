import React from 'react';

import styles from './loading.module.scss';

const Loading: React.FC = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner} />
      <p className={styles.text}>로딩 중입니다...</p>
    </div>
  );
};

export default Loading;
