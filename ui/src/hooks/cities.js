import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getSearchCitiesAPI } from '../api';

const KEY = 'cities';

export const useSearchCities = ({ queryOptions, ...options }) =>
  useQuery([KEY, options], getSearchCitiesAPI, queryOptions);

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
