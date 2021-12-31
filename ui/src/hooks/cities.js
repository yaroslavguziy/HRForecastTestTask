import { useQuery } from 'react-query';
import { getSearchCitiesAPI } from '../api';

const KEY = 'cities';

export const useSearchCities = ({ queryOptions, ...options }) =>
  useQuery([KEY, options], getSearchCitiesAPI, queryOptions);
