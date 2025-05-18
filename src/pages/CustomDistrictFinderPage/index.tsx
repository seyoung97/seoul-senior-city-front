import { useRecoilValue, useSetRecoilState } from 'recoil';

import { questions } from '@/data/questions';
import { useRecommendMutation } from '@/hooks/mutations/useRecommendMutation';
import { currentQuestionIndexState, isSubmittedState, responsesState } from '@/recoil/customDistrictFinder';

import QuestionStepSection from './_sections/QuestionStepSection';
import ResultSection from './_sections/ResultSection';
import styles from './customDistrictFinderPage.module.scss';

const CustomDistrictFinderPage = () => {
  const currentIndex = useRecoilValue(currentQuestionIndexState);
  const isSubmitted = useRecoilValue(isSubmittedState);
  const setSubmitted = useSetRecoilState(isSubmittedState);
  const params = useRecoilValue(responsesState);
  const { mutate, data, isSuccess } = useRecommendMutation();

  const handleSubmit = () => {
    // TODO: 여기서 백엔드에 전송
    mutate(params);
    setSubmitted(true);
  };

  if (isSubmitted && isSuccess) return <ResultSection data={data.result} />;

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
