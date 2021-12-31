import React from 'react';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '../constants/queryClient';

import { Search } from '../components/Search';

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Search />
    </QueryClientProvider>
  );
};
