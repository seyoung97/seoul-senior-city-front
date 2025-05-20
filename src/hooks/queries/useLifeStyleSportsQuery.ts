import { useQuery } from 'react-query';

import { LIFESTYLE_QUERY_KEY } from '@/constants/queryKeys';
import { getLifeStyleSports } from '@/services/lifeStyle';

export const useLifeStyleSportsQuery = () => {
  return useQuery({
    queryKey: LIFESTYLE_QUERY_KEY.sports(),
    queryFn: getLifeStyleSports,
  });
};
