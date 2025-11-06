import api from './apiClient';

// ---- Auth ----
export async function authRegister({ name, email, password }) {
  const { data } = await api.post('/auth/register', { name, email, password });
  return data;
}

export async function authLogin({ email, password }) {
  const { data } = await api.post('/auth/login', { email, password });
  return data;
}

export async function authMe() {
  const { data } = await api.get('/auth/me');
  return data;
}

// ---- Products ----
export async function listProducts() {
  const { data } = await api.get('/products');
  return Array.isArray(data) ? data : data?.data || [];
}

export async function createProduct(payload) {
  const { data } = await api.post('/products', payload);
  return data;
}

// ---- Projects ----
export async function listProjects() {
  const { data } = await api.get('/projects');
  return Array.isArray(data) ? data : data?.data || [];
}

export async function createProject(payload) {
  const { data } = await api.post('/projects', payload);
  return data;
}

// ---- Posts ----
export async function listPosts() {
  const { data } = await api.get('/posts');
  return Array.isArray(data) ? data : data?.data || [];
}

export async function createPost(payload) {
  const { data } = await api.post('/posts', payload);
  return data;
}

// ---- Orders ----
export async function listOrders() {
  const { data } = await api.get('/orders');
  return Array.isArray(data) ? data : data?.data || [];
}

export async function createOrder(payload) {
  const { data } = await api.post('/orders', payload);
  return data;
}

// ---- Chats ----
export async function listChats() {
  const { data } = await api.get('/chats');
  return Array.isArray(data) ? data : data?.data || [];
}

export async function createChat(payload) {
  const { data } = await api.post('/chats', payload);
  return data;
}
