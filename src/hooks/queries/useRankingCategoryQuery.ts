import { useQuery } from 'react-query';

import { RANKING_QUERY_KEY } from '@/constants/queryKeys';
import { getRankingCategory } from '@/services/ranking';

export const useRankingCategoryQuery = () => {
  return useQuery({
    queryKey: RANKING_QUERY_KEY.category(),
    queryFn: getRankingCategory,
  });
};
