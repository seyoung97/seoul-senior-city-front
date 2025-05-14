import React from 'react';

import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import MenuSection from './_sections/MenuSection';
import styles from './mainPage.module.scss';

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <h2>
          노년을 편안하게 보낼 수 있는, <br />
          <span>든든한 동네</span>를 찾아보세요!
        </h2>
        <Carousel />
        <MenuSection />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
