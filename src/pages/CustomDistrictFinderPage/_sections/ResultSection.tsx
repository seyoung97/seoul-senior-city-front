import { useRecoilValue } from 'recoil';

import { trophy } from '@/assets/images';
import { responsesState } from '@/recoil/customDistrictFinder';

import styles from './resultSection.module.scss';

const ResultSection = () => {
  const responses = useRecoilValue(responsesState);

  return (
    <section className={styles.wrapper}>
      <ul>
        <li className={styles.first}>
          <div className={styles.imgWrapper}>
            <img src={trophy} alt="img" />
          </div>
          <p>
            사용자님께
            <br /> 가장 잘 맞는 동네는
            <br />
            <span>마포구</span>입니다!
          </p>
        </li>
        <div className={styles.elseWrapper}>
          <li className={styles.else}>
            <p>
              <span>2위</span>서대문구
            </p>
          </li>
          <li className={styles.else}>
            <p>
              <span>3위</span>서대문구
            </p>
          </li>
          <li className={styles.else}>
            <p>
              <span>4위</span>서대문구
            </p>
          </li>
          <li className={styles.else}>
            <p>
              <span>5위</span>서대문구
            </p>
          </li>
        </div>
      </ul>
    </section>
  );
};

export default ResultSection;
