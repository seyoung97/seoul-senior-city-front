import styles from './likertSelector.module.scss';

type LikertSelectorProps = {
  value: number;
  onChange: (v: number) => void;
};

const LikertSelector = ({ value, onChange }: LikertSelectorProps) => {
  const options = [1, 2, 3, 4, 5];
  const labels: Record<number, string> = {
    1: '아니다',
    3: '보통이다',
    5: '그렇다',
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.dots}>
        {options.map((v) => (
          <button
            key={v}
            className={`${styles.dot} ${value === v ? styles.selected : styles.unselected}`}
            onClick={() => onChange(v)}
            aria-label={`${v}점 (${labels[v] || ''})`}
          >
            <span className="visually-hidden">{v}</span>
          </button>
        ))}
      </div>
      <div className={styles.labels}>
        <span>{labels[1]}</span>
        <span>{labels[3]}</span>
        <span>{labels[5]}</span>
      </div>
    </div>
  );
};

export default LikertSelector;
