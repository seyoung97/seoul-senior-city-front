// export interface ResponseDTO<T> {
//   cause: string | null;
//   data: T;
//   error: string | null;
//   message: string | null;
//   status: number;
//   timeStamp: Date;
// }

export interface ResponseDTO<T> {
  result: T;
}

export interface RecommendParams {
  safety: number;
  walk: number;
  relation: number;
  welfare: number;
  culture: number;
  transport: number;
  medical: number;
  social: number;
  nature: number;
  air: number;
}

export interface RecommendResponse {
  district: string;
  score: number;
}

export interface LifeStyleResponseDTO<T> {
  title: string;
  unit: string;
  category: string;
  items: T;
}

export interface LifeStyleResponse {
  rank: number;
  name: string;
  score: number;
}

export type MapModeOption = 'friendly' | 'unfriendly' | { mode: 'category'; category: string };

export interface MapResponseDTO<T> {
  data: T;
}

export interface MapResponse {
  district: string; // 자치구 이름
  rank: number; // 순위 (1~5)
  latitude: number; //위도
  longitude: number; //경도
  metricData: MetricScore[]; // 선택 카테고리의 점수 목록
  info: string;
}

export interface MetricScore {
  name: string;
  selectedDistrict: number;
  average: number;
}
