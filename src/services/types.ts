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
