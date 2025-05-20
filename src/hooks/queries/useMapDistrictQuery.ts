import { useQuery } from 'react-query';

import { getMapDistrictTop } from '@/services/map';
import { MapModeOption } from '@/services/types';

export const useMapDistrictQuery = (option: MapModeOption) => {
  return useQuery({
    queryKey: ['mapDistrict', option],
    queryFn: () => getMapDistrictTop(option),
    enabled: true,
  });
};
