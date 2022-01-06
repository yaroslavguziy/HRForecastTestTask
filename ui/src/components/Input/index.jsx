import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input.attrs(props => ({
  type: 'text',
  size: props.size || '10px',
}))`
  font-size: 16px;
  box-sizing: border-box;
  border: none;
  outline: none;
  width: 100%;
  display: block;
  padding: ${props => props.size};
`;

export const Input = ({ value, handleChange }) => {
  return <StyledInput value={value} onChange={handleChange} />;
};

Input.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
