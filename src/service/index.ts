import axios from 'axios';

import showAPI from './show';

const createAPI = () => {
  const axiosInstance = axios.create({
    baseURL: 'https://api.tvmaze.com/',
  });

  axiosInstance.interceptors.response.use(response => {
    return response;
  });

  return {
    show: showAPI(axiosInstance),
  };
};

export default createAPI;
