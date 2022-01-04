import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: orange;
  color: white;
  border: none;
  font-size: 16px;
  padding: 8px 15px;
  border-radius: 15px;
  cursor: pointer;
`;

export const SearchButton = () => {
  return <StyledButton>Search</StyledButton>;
};
