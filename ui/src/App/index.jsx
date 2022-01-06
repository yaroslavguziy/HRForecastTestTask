import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import { queryClient } from '../constants/queryClient';

import { SearchContainer } from '../components/SearchContainer';

import { theme } from '../constants/theme';

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SearchContainer />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
