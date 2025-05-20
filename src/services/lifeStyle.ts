import apiClient from './apiClient';
import { LifeStyleResponse, LifeStyleResponseDTO } from './types';

export const getLifeStyleWalk = async (): Promise<LifeStyleResponseDTO<LifeStyleResponse[]>> => {
  const response = await apiClient.get<LifeStyleResponseDTO<LifeStyleResponse[]>>('/walkability-priority');
  return response.data;
};

export const getLifeStyleTransport = async (): Promise<LifeStyleResponseDTO<LifeStyleResponse[]>> => {
  const response = await apiClient.get<LifeStyleResponseDTO<LifeStyleResponse[]>>('/transport-priority');
  return response.data;
};

export const getLifeStyleMedical = async (): Promise<LifeStyleResponseDTO<LifeStyleResponse[]>> => {
  const response = await apiClient.get<LifeStyleResponseDTO<LifeStyleResponse[]>>('/medical-priority');
  return response.data;
};

export const getLifeStyleSocial = async (): Promise<LifeStyleResponseDTO<LifeStyleResponse[]>> => {
  const response = await apiClient.get<LifeStyleResponseDTO<LifeStyleResponse[]>>('/social-priority');
  return response.data;
};

export const getLifeStyleWelfare = async (): Promise<LifeStyleResponseDTO<LifeStyleResponse[]>> => {
  const response = await apiClient.get<LifeStyleResponseDTO<LifeStyleResponse[]>>('/culture-welfare-priority');
  return response.data;
};

export const getLifeStyleSports = async (): Promise<LifeStyleResponseDTO<LifeStyleResponse[]>> => {
  const response = await apiClient.get<LifeStyleResponseDTO<LifeStyleResponse[]>>('/walk-sports-priority');
  return response.data;
};
