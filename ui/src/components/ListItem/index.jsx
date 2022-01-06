import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../constants/theme';

const StyledItem = styled.li`
  box-sizing: border-box;
  display: block;
  padding: 15px;
  transition: all 0.3s linear;
  display: flex;
  align-items: center;
  color: ${theme.color.grey};
  &:hover {
    color: ${theme.color.black};
    background-color: rgba(204, 204, 204, 0.3);
  }
`;

export const ListItem = ({ children }) => {
  return (
    <StyledItem>
      <FontAwesomeIcon
        className="search-icon"
        icon={faSearch}
        style={{ marginRight: '10px' }}
      />
      {children}
    </StyledItem>
  );
};

ListItem.propTypes = {
  children: PropTypes.node,
};
