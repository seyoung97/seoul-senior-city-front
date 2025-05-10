import styles from './menuItem.module.scss';

interface Props {
  src: string;
  alt: string;
  label: string;
}

const MenuItem = ({ src, alt, label }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <img src={src} alt={alt} className={styles.icon} />
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default MenuItem;
