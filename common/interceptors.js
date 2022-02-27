import axios from 'axios';


export const initInterceptors = () => {

  axios.interceptors.request.use((config) => {

    const headers = {
      'Content-Type': 'application/json'
    };

    config.headers = headers;
    return config;

  });
}
