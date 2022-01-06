import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { theme } from '../../constants/theme';

const SearchList = styled.ul`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 100%;
  list-style: none;
  top: 69px;
  left: 0px;
  margin: 0;
  padding: 15px 0;
  border: 1px solid ${theme.color.grey};
`;

export const List = ({ children }) => {
  return <SearchList>{children}</SearchList>;
};

List.propTypes = {
  children: PropTypes.node,
};
