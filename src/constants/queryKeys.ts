export const RECOMMEND_QUERY_KEY = {
  base: ['recommendation'] as const,
  withParams: (params: Record<string, number>) => ['recommendation', params] as const,
};
