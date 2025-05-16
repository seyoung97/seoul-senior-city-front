import { useMutation } from 'react-query';

import { getRecommendations } from '@/services/recommend';

export const useRecommendMutation = () => {
  return useMutation({
    mutationFn: getRecommendations,
  });
};
