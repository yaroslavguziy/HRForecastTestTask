import React, { useState } from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useSearchCities } from '../../hooks/cities';

import { CloseButton } from '../CloseButton';

const Input = styled.input.attrs(props => ({
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

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchInput = () => {
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState('10');

  const { data } = useSearchCities({
    query,
    limit,
    queryOptions: { enabled: query?.length > 1 },
  });

  const handleChange = ({ target }) => setQuery(target.value);
  const handleClick = () => setQuery('');

  return (
    <InputContainer>
      <FontAwesomeIcon icon={faSearch} style={{ color: 'grey' }} />
      <Input placeholder="Search" value={query} onChange={handleChange} />
      <CloseButton handleClick={handleClick} />
    </InputContainer>
  );
};
