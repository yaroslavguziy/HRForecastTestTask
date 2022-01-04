import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: grey;
  border: none;
  font-size: 18px;
  background-color: transparent;
  cursor: pointer;
  margin: 0 15px;
`;

export const CloseButton = ({ handleClick }) => {
  return <StyledButton onClick={handleClick}>x</StyledButton>;
};
