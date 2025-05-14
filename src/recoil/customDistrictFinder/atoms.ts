import { atom } from 'recoil';

// 현재 몇 번째 질문에 있는지
export const currentQuestionIndexState = atom<number>({
  key: 'currentQuestionIndexState',
  default: 0,
});

// 사용자 응답 저장 (예: { walk: 4, safety: 5, ... })
export const responsesState = atom<Record<string, number>>({
  key: 'responsesState',
  default: {},
});

export const isSubmittedState = atom<boolean>({
  key: 'isSubmittedState',
  default: false,
});
