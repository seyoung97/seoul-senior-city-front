import { useQuery } from 'react-query';

import { LIFESTYLE_QUERY_KEY } from '@/constants/queryKeys';
import { getLifeStyleWelfare } from '@/services/lifeStyle';

export const useLifeStyleCultureQuery = () => {
  return useQuery({
    queryKey: LIFESTYLE_QUERY_KEY.culture(),
    queryFn: getLifeStyleWelfare,
  });
};
