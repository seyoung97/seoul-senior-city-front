import { bannerGreen } from '@/assets/images';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useRankingDistrictQuery } from '@/hooks/queries/useRankingDistrictQuery';

import styles from './rankingDistrictPage.module.scss';

const RankingDistrictPage = () => {
  const { data, isLoading, isError } = useRankingDistrictQuery();

  if (isLoading) {
    return <p className={styles.status}>걷기 지수를 불러오는 중입니다...</p>;
  }

  if (isError || !data) {
    return <p className={styles.status}>데이터를 불러오지 못했어요.</p>;
  }

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img src={bannerGreen} />
        </div>
        <ul>
          <li>
            <p>
              <span>1위</span>
              {data[0].district}
            </p>
          </li>
          <li>
            <p>
              <span>2위</span>
              {data[1].district}
            </p>
          </li>
          <li>
            <p>
              <span>3위</span>
              {data[2].district}
            </p>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default RankingDistrictPage;
