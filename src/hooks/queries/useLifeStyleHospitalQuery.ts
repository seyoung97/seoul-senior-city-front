import { useQuery } from 'react-query';

import { LIFESTYLE_QUERY_KEY } from '@/constants/queryKeys';
import { getLifeStyleMedical } from '@/services/lifeStyle';

export const useLifeStyleHospitaQuery = () => {
  return useQuery({
    queryKey: LIFESTYLE_QUERY_KEY.hospital(),
    queryFn: getLifeStyleMedical,
  });
};
