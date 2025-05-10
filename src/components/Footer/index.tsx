import { IconCheckCircleFill, IconHeartFill, IconHomeFill, IconMapPin } from '@/assets/icons';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <div className={styles.navItem}>
          <IconHomeFill width={24} height={24} className={styles.icon} />
          <span className={styles.name}>홈</span>
        </div>
        <div className={styles.navItem}>
          <IconMapPin width={24} height={24} className={styles.icon} />
          <span className={styles.name}>지도</span>
        </div>
        <div className={styles.navItem}>
          <IconCheckCircleFill width={24} height={24} className={styles.icon} />
          <span className={styles.name}>맞춤동네</span>
        </div>
        <div className={styles.navItem}>
          <IconHeartFill width={24} height={24} className={styles.icon} />
          <span className={styles.name}>상황별</span>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
