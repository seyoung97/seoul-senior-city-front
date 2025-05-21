import { useQuery } from 'react-query';

import { RANKING_QUERY_KEY } from '@/constants/queryKeys';
import { getRankingDistrict } from '@/services/ranking';

export const useRankingDistrictQuery = () => {
  return useQuery({
    queryKey: RANKING_QUERY_KEY.district(),
    queryFn: getRankingDistrict,
  });
};
