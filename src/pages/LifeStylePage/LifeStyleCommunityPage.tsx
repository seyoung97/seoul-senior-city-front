import { trophy } from '@/assets/images';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useLifeStyleCommunityQuery } from '@/hooks/queries/useLifeStyleCommunityQuery';

import styles from './lifeStyleCommunityPage.module.scss';

const LifeStyleCommunityPage = () => {
  const { data, isLoading, isError } = useLifeStyleCommunityQuery();
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
        <ul>
          <li className={styles.first}>
            <div className={styles.imgWrapper}>
              <img src={trophy} alt="img" />
            </div>
            <p>
              경로당이
              <br /> 가장 많은 동네는
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

export default LifeStyleCommunityPage;
