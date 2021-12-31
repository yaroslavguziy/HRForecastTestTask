import { API_URL } from '../constants/env';

export const getSearchCitiesAPI = async ({ queryKey }) => {
  const [_key, { query, limit }] = queryKey;

  return await fetch(`${API_URL}?query=${query}&limit=${limit}`).then(res =>
    res.json()
  );
};
