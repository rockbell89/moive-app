import axios from "axios";

const mongoInstance = () => {
  const instance = axios.create({
    baseURL: `${import.meta.env.VITE_MONGO_API}/api`,
    withCredentials: true,
  });

  const get = (path: string, params?: any, headers?: any) => {
    return instance.get(path, { params, headers });
  };

  const post = (path: string, params?: any, headers?: any) => {
    return instance.post(path, params, { headers });
  };

  const patch = (path: string, params?: any, headers?: any) => {
    return instance.patch(path, params, headers);
  };

  const _delete = (path: string, params?: any, headers?: any, data?: any) => {
    return instance.delete(path, { params, headers, data });
  };

  return {
    get,
    post,
    patch,
    delete: _delete,
  };
};

// TMDB API
const movieInstance = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  const get = (path: string, params?: any) =>
    instance.get(`${path}?api_key=${API_KEY}`, {
      params: params,
    });

  return {
    get,
  };
};

export enum IMAGE_SIZE {
  SM = "w200",
  MD = "w500",
  LG = "w1280",
}

export const api = mongoInstance();
export const movieApi = movieInstance();
export const imageApi = (path = "", size: IMAGE_SIZE = IMAGE_SIZE.MD) => {
  return `${import.meta.env.VITE_IMAGE_BASE_URL}/${size}${path}`;
};
