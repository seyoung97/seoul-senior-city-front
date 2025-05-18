import { atom } from 'recoil';

import { RecommendParams } from '@/services/types';

// 현재 몇 번째 질문에 있는지
export const currentQuestionIndexState = atom<number>({
  key: 'currentQuestionIndexState',
  default: 0,
});

// 사용자 응답 저장 (예: { walk: 4, safety: 5, ... })
export const responsesState = atom<RecommendParams>({
  key: 'responsesState',
  default: {
    safety: 0,
    walk: 0,
    relation: 0,
    welfare: 0,
    culture: 0,
    transport: 0,
    medical: 0,
    social: 0,
    nature: 0,
    air: 0,
  },
});

export const isSubmittedState = atom<boolean>({
  key: 'isSubmittedState',
  default: false,
});
