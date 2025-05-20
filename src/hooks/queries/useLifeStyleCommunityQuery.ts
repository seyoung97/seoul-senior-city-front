import { useQuery } from 'react-query';

import { LIFESTYLE_QUERY_KEY } from '@/constants/queryKeys';
import { getLifeStyleSocial } from '@/services/lifeStyle';

export const useLifeStyleCommunityQuery = () => {
  return useQuery({
    queryKey: LIFESTYLE_QUERY_KEY.community(),
    queryFn: getLifeStyleSocial,
  });
};
