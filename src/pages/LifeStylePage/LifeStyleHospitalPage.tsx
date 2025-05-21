import { trophy } from '@/assets/images';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Loading from '@/components/Loading/Loading';
import { useLifeStyleHospitaQuery } from '@/hooks/queries/useLifeStyleHospitalQuery';

import styles from './lifeStyleHospitalPage.module.scss';

const LifeStyleHospitalPage = () => {
  const { data, isLoading, isError } = useLifeStyleHospitaQuery();
  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
    return <p className={styles.status}>데이터를 불러오지 못했어요.</p>;
  }

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <ul>
          <li className={styles.first}>
            <div className={styles.imgWrapper}>
              <img src={trophy} alt="img" />
            </div>
            <p>
              병원접근성이
              <br /> 가장 좋은 동네는
              <br />
              <span>{data.items[0].name}</span>입니다!
            </p>
          </li>
          <div className={styles.elseWrapper}>
            <li className={styles.else}>
              <p>
                <span>2위</span>
                {data.items[1].name}
              </p>
            </li>
            <li className={styles.else}>
              <p>
                <span>3위</span>
                {data.items[2].name}
              </p>
            </li>
            <li className={styles.else}>
              <p>
                <span>4위</span>
                {data.items[3].name}
              </p>
            </li>
            <li className={styles.else}>
              <p>
                <span>5위</span>
                {data.items[4].name}
              </p>
            </li>
          </div>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default LifeStyleHospitalPage;
