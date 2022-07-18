import { useQuery } from 'react-query';
import { getMeal, getAchievementRate } from '../services/api';
import { STALE_TIME } from '../utils/constant';

export const useGetMeal = () => {
  return useQuery('getMeal', () => getMeal(), {
    staleTime: STALE_TIME.TEN_MIN,
  });
};

export const useGetAchievementRate = () => {
  return useQuery('getAchievementRate', () => getAchievementRate(), {
    staleTime: STALE_TIME.TEN_MIN,
  });
};
