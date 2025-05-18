import { Link } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';

import { trophy } from '@/assets/images';
import { currentQuestionIndexState, responsesState } from '@/recoil/customDistrictFinder';
import { RecommendResponse } from '@/services/types';

import styles from './resultSection.module.scss';

interface Props {
  data: RecommendResponse[];
}

const ResultSection = ({ data }: Props) => {
  const resetForm = useResetRecoilState(responsesState);
  const resetQuestionIndex = useResetRecoilState(currentQuestionIndexState);

  const handelOnClickLink = () => {
    resetForm();
    resetQuestionIndex();
  };

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
            <span>{data[0].district}</span>입니다!
          </p>
        </li>
        <div className={styles.elseWrapper}>
          <li className={styles.else}>
            <p>
              <span>2위</span>
              {data[1].district}
            </p>
          </li>
          <li className={styles.else}>
            <p>
              <span>3위</span>
              {data[2].district}
            </p>
          </li>
          <li className={styles.else}>
            <p>
              <span>4위</span>
              {data[3].district}
            </p>
          </li>
          <li className={styles.else}>
            <p>
              <span>5위</span>
              {data[4].district}
            </p>
          </li>
        </div>
      </ul>
      <Link to={'/'} onClick={handelOnClickLink} style={{ width: '100%' }}>
        <div className={styles.button}>돌아가기</div>
      </Link>
    </section>
  );
};

export default ResultSection;
