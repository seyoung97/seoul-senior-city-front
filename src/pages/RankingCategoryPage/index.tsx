import { column } from '@/assets/images';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Loading from '@/components/Loading/Loading';
import { useRankingCategoryQuery } from '@/hooks/queries/useRankingCategoryQuery';

import styles from './rankingCategoryPage.module.scss';

const RankingCategoryPage = () => {
  const { data, isLoading, isError } = useRankingCategoryQuery();

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
        <div className={styles.imgWrapper}>
          <img src={column} />
        </div>
        <ul>
          <li>
            <p>
              <span>1위</span>
              {data[0].category}
            </p>
          </li>
          <li>
            <p>
              <span>2위</span>
              {data[1].category}
            </p>
          </li>
          <li>
            <p>
              <span>3위</span>
              {data[2].category}
            </p>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default RankingCategoryPage;
