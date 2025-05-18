import apiClient from './apiClient';
import { RecommendParams, RecommendResponse, ResponseDTO } from './types';

export const getRecommendations = async (params: RecommendParams): Promise<ResponseDTO<RecommendResponse[]>> => {
  const response = await apiClient.get('/recommend', { params });
  return response.data;
};
