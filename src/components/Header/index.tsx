import { IconBellFill } from '@/assets/icons';
import { logo } from '@/assets/logo';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="서비스 로고" className={styles.logo} />
        <h1 className={styles.title}>시니어 든든 동네</h1>
      </div>
      <div className={styles.iconWrapper}>
        <IconBellFill className={styles.icon} />
      </div>
    </header>
  );
};

export default Header;
