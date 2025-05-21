export const RECOMMEND_QUERY_KEY = {
  base: ['recommendation'] as const,
  withParams: (params: Record<string, number>) => ['recommendation', params] as const,
};

export const LIFESTYLE_QUERY_KEY = {
  all: ['lifestyle'] as const,
  walkability: () => [...LIFESTYLE_QUERY_KEY.all, 'walkability'] as const,
  transportation: () => [...LIFESTYLE_QUERY_KEY.all, 'transportation'] as const,
  hospital: () => [...LIFESTYLE_QUERY_KEY.all, 'hospital'] as const,
  community: () => [...LIFESTYLE_QUERY_KEY.all, 'community'] as const,
  culture: () => [...LIFESTYLE_QUERY_KEY.all, 'culture'] as const,
  sports: () => [...LIFESTYLE_QUERY_KEY.all, 'sports'] as const,
};

export const MAP_DISTRICT_QUERY_KEY = {
  all: ['mapDistrict'] as const,
  byCategory: (category: string) => [...MAP_DISTRICT_QUERY_KEY.all, 'category', category] as const,
};

export const RANKING_QUERY_KEY = {
  all: ['ranking'] as const,
  district: () => [...RANKING_QUERY_KEY.all, 'district'] as const,
  category: () => [...RANKING_QUERY_KEY.all, 'category'] as const,
};
