import axios from 'axios';

// ✅ Base URL detection (CRA-safe)
const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';

// ✅ Axios instance
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Automatically attach JWT if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('pv_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ Simple error forwarding
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default api;
export { baseURL };
