import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useSearchCities } from '../../hooks/cities';
import { useDebounce } from '../../hooks/cities';

import { Button } from '../Button';
import { Input } from '../Input';
import { List } from '../List';
import { ListItem } from '../ListItem';
import { VARIANT } from '../Button';
import { theme } from '../../constants/theme';

const StyledContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 50px;
  padding: 15px;
  width: 100%;
  border: 1px solid ${theme.color.grey};
  border-radius: 10px;
`;

const limit = 10;

export const SearchContainer = () => {
  const [query, setQuery] = useState('');
  const [list, setList] = useState(null);

  const debouncedSearchTerm = useDebounce(query, 500);

  const { data } = useSearchCities({
    query,
    limit,
    queryOptions: { enabled: query?.length >= 1 },
  });

  useEffect(() => {
    if (debouncedSearchTerm) {
      setList(data);
    }
  }, [debouncedSearchTerm]);

  const handleChange = ({ target }) => setQuery(target.value);

  const handleClick = () => {
    setQuery('');
    setList(null);
  };

  return (
    <StyledContainer>
      {list?.data.length || query.length ? (
        <List>
          {query.length && list?.data?.length ? (
            list?.data.map(({ id, name }) => (
              <ListItem key={id}>{name}</ListItem>
            ))
          ) : (
            <ListItem>No results</ListItem>
          )}
        </List>
      ) : null}
      <FontAwesomeIcon icon={faSearch} style={{ color: theme.color.grey }} />
      <Input value={query} handleChange={handleChange} />
      <Button
        color={theme.color.grey}
        variant={VARIANT.CONTAINED}
        onClick={handleClick}
      />
      <Button color={theme.color.white}>Search</Button>
    </StyledContainer>
  );
};
