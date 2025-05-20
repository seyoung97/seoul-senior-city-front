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
  sposrts: () => [...LIFESTYLE_QUERY_KEY.all, 'sports'] as const,
};
