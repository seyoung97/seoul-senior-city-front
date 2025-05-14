import { Outlet } from 'react-router-dom';

// import Footer from '../Footer';
// import Header from '../Header';

import styles from './layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      {/* <Header /> */}
      {/* <div className={styles.mainContainer}> */}
      <Outlet />
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
