import React from 'react';

import styles from './progressBar.module.scss';

interface ProgressBarProps {
  value: number;
  max?: number;
  height?: string;
  color?: string;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  height = '8px',
  color = '#09a56f',
  className,
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  console.log(percentage);

  return (
    <div
      className={`${styles.container} ${className ?? ''}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      style={{ height }}
    >
      <div className={styles.fill} style={{ width: `${percentage}%`, backgroundColor: color }} />
    </div>
  );
};

export default ProgressBar;
