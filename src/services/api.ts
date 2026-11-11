import axios from 'axios';
import { type AxiosRequestConfig } from 'axios';

export const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export function handleLogout() {
  localStorage.removeItem('token');
  window.location.href = '/login';
}

export const fetcher = async (url: string, options: AxiosRequestConfig = {}) => {
  api.get(url, options).then((response) => response.data);   
}
