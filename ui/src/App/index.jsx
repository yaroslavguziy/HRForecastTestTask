import React from 'react';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '../constants/queryClient';

import { SearchContainer } from '../components/SearchContainer';

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchContainer />
    </QueryClientProvider>
  );
};
