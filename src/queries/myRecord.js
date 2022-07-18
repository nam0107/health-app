import { useQuery } from 'react-query';
import { getBodyRecord } from '../services/api';
import { STALE_TIME } from '../utils/constant';

export const useGetBodyRecord = () => {
  return useQuery('getBodyRecord', () => getBodyRecord(), {
    staleTime: STALE_TIME.TEN_MIN,
  });
};


