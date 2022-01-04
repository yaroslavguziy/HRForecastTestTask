import React from 'react';
import styled from 'styled-components';

import { SearchInput } from '../SearchInput';
import { SearchButton } from '../SearchButton';

const StyledContainer = styled.div`
  box-sizing: border-box;
  margin-top: 50px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const SearchContainer = () => {
  return (
    <StyledContainer>
      <SearchInput />
      <SearchButton />
    </StyledContainer>
  );
};
