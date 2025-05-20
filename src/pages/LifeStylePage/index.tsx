import { useNavigate } from 'react-router-dom';

import { communityIcon, hospitalIcon, sportIcon, transportationIcon, walkIcon, welfareIcon } from '@/assets/images';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import styles from './lifeStylePage.module.scss';

const LifeStylePage = () => {
  const navigate = useNavigate();

  const handleNavigate = (address: string) => {
    navigate(address);
  };

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <nav>
          <li onClick={() => handleNavigate('/life-style-walk')}>
            <img src={walkIcon} alt="icon" />
            <h2>거동이 불편해요</h2>
          </li>
          <hr />
          <li onClick={() => handleNavigate('/life-style-transportation')}>
            <img src={transportationIcon} alt="icon" />
            <h2>대중교통을 이용해 출퇴근해요</h2>
          </li>
          <hr />
          <li>
            <img src={hospitalIcon} alt="icon" />
            <h2>병원을 자주 방문해요</h2>
          </li>
          <hr />
          <li>
            <img src={communityIcon} alt="icon" />
            <h2>경로당을 자주 이용해요</h2>
          </li>
          <hr />
          <li>
            <img src={welfareIcon} alt="icon" />
            <h2>문화 복지센터를 자주 이용해요</h2>
          </li>
          <hr />
          <li>
            <img src={sportIcon} alt="icon" />
            <h2>공공 체육시설을 자주 이용해요</h2>
          </li>
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default LifeStylePage;
