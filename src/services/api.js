import axios from 'axios';
import config from '../utils/config';

const getMeal = async () => {
  const response = await axios.get(`${config.apiEndpoint}/meal`);
  return response?.data;
};

const getAchievementRate = async () => {
  const response = await axios.get(`${config.apiEndpoint}/achievementRate`);
  return response?.data;
};

const getBodyRecord = async () => {
  const response = await axios.get(`${config.apiEndpoint}/bodyRecord`);
  return response?.data;
};

export { getMeal, getAchievementRate, getBodyRecord };
