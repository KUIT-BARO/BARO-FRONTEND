import { QueryCache, QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: error => {
      if (import.meta.env.DEV) console.error('[React Query Error]', error);
    },
  }),
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 2,
      gcTime: 1000 * 60 * 5,
    },
  },
});
