import { useRecoilState, useSetRecoilState } from 'recoil';

import ProgressBar from '@/components/ProgressBar/ProgressBar';
import { questions } from '@/data/questions';
import { currentQuestionIndexState, responsesState } from '@/recoil/customDistrictFinder/atoms';

import LikertSelector from '../../../components/LikertSelector/index';

import styles from './questionStepSection.module.scss';

const QuestionStepSection = () => {
  const [currentIndex, setCurrentIndex] = useRecoilState(currentQuestionIndexState);
  const setResponses = useSetRecoilState(responsesState);

  const current = questions[currentIndex];

  const handleSelect = (score: number) => {
    // 응답 저장
    setResponses((prev) => ({ ...prev, [current.id]: score }));
    // 다음 질문으로
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 150);
  };

  console.log(currentIndex);

  return (
    <section className={styles.wrapper}>
      <ProgressBar value={currentIndex} max={10} className={styles.progressBar} />
      <h2>{current.text}</h2>
      <LikertSelector value={0} onChange={handleSelect} />
    </section>
  );
};

export default QuestionStepSection;
