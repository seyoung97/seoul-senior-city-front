import { useQuery } from 'react-query';

import { LIFESTYLE_QUERY_KEY } from '@/constants/queryKeys';
import { getLifeStyleTransport } from '@/services/lifeStyle';

export const useLifeStyleTransportQuery = () => {
  return useQuery({
    queryKey: LIFESTYLE_QUERY_KEY.transportation(),
    queryFn: getLifeStyleTransport,
  });
};
