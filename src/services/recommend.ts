import apiClient from './apiClient';
import { RecommendParams, ResponseDTO } from './types';

export const getRecommendations = async (params: RecommendParams): Promise<ResponseDTO<RecommendParams[]>> => {
  const response = await apiClient.get('/recommend', { params });
  return response.data;
};
