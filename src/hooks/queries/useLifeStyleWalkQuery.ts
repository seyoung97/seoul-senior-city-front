import { useQuery } from 'react-query';

import { LIFESTYLE_QUERY_KEY } from '@/constants/queryKeys';
import { getLifeStyleWalk } from '@/services/lifeStyle';

export const useLifeStyleWalkQuery = () => {
  return useQuery({
    queryKey: LIFESTYLE_QUERY_KEY.walkability(),
    queryFn: getLifeStyleWalk,
  });
};
