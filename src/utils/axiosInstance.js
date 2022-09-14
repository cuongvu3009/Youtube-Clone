import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://real-erin-viper-fez.cyclic.app/api/v1/',
});
