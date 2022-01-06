import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../constants/theme';

const VARIANT = { CONTAINED: 'contained', DEFAULT: 'default' };

const StyledButton = styled.button`
  background-color: ${props =>
    props.variant === VARIANT.DEFAULT
      ? props.theme.color.orange
      : 'transparent'};
  color: ${props => props.color};
  border: none;
  font-size: 16px;
  padding: 8px 15px;
  border-radius: 15px;
  cursor: pointer;
`;

export { VARIANT };

export const Button = ({ children, variant, color, onClick }) => {
  return (
    <StyledButton variant={variant} color={color} onClick={onClick}>
      {variant === VARIANT.CONTAINED ? (
        <FontAwesomeIcon icon={faTimes} />
      ) : (
        children
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: VARIANT.DEFAULT,
};
