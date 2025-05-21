import apiClient, { RankingCategoryResponse, RankingDistrictResponse } from './apiClient';

export const getRankingDistrict = async () => {
  const response = await apiClient.get<RankingDistrictResponse[]>('/top3-district');
  return response.data;
};

export const getRankingCategory = async () => {
  const response = await apiClient.get<RankingCategoryResponse[]>('/top5-categories');
  return response.data;
};
