import { useRecoilValue, useSetRecoilState } from 'recoil';

import { questions } from '@/data/questions';
import { useRecommendMutation } from '@/hooks/mutations/useRecommendMutation';
import { currentQuestionIndexState, isSubmittedState } from '@/recoil/customDistrictFinder';

import QuestionStepSection from './_sections/QuestionStepSection';
import ResultSection from './_sections/ResultSection';
import styles from './customDistrictFinderPage.module.scss';

const CustomDistrictFinderPage = () => {
  const currentIndex = useRecoilValue(currentQuestionIndexState);
  const isSubmitted = useRecoilValue(isSubmittedState);
  const setSubmitted = useSetRecoilState(isSubmittedState);
  const { mutate, data } = useRecommendMutation();

  const handleSubmit = () => {
    // TODO: 여기서 백엔드에 전송
    mutate({ safety: -5, walk: -3, relation: 3 });
    setSubmitted(true);
  };

  if (isSubmitted) return <ResultSection />;

  return (
    <main className={styles.wrapper}>
      {currentIndex < questions.length ? (
        <QuestionStepSection />
      ) : (
        <div className={styles.container}>
          <h2>모든 질문에 답하셨습니다.</h2>
          <button onClick={handleSubmit}>결과 보기</button>
        </div>
      )}
    </main>
  );
};

export default CustomDistrictFinderPage;
