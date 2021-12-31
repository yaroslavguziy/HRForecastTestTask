import React, { useState } from 'react';

import { useSearchCities } from '../../hooks/cities';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState('10');

  const { data } = useSearchCities({
    query,
    limit,
    queryOptions: { enabled: query?.length > 1 },
  });

  const handleChange = ({ target }) => setQuery(target.value);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};
