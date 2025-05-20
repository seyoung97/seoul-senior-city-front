import apiClient, { MapModeOption, MapResponse, MapResponseDTO } from './apiClient';

export const getMapDistrictTop = async (option: MapModeOption) => {
  let query = '';
  if (typeof option === 'string') {
    query = `/district-top5?mode=${option}`;
  } else {
    query = `/district-top5?mode=category&category=${encodeURIComponent(option.category)}`;
  }

  const response = await apiClient.get<MapResponseDTO<MapResponse[]>>(query);
  return response.data;
};
