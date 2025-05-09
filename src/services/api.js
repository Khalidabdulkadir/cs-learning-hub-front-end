import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Create different instances for different content types
const multipartApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

const jsonApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const projectApi = {
  getAll: () => api.get('/projects/'),
  getById: (id) => api.get(`/projects/${id}/`),
  create: (formData) => multipartApi.post('/projects/', formData),
  update: (id, formData) => multipartApi.patch(`/projects/${id}/`, formData),
  delete: (id) => api.delete(`/projects/${id}/`),
};

export const codeSnippetApi = {
  getAll: ({ search, tags, page } = {}) => {
    const params = {};
    if (search) params.search = search;
    if (tags) params.tags = tags; // could be a single tag or array
    if (page) params.page = page;
    return api.get('/snippets/', { params });
  },
  getById: (id) => api.get(`/snippets/${id}/`),
  create: (data) => jsonApi.post('/snippets/', data),
  update: (id, data) => jsonApi.patch(`/snippets/${id}/`, data),
  delete: (id) => api.delete(`/snippets/${id}/`),
};


export const topicApi = {
  getAll: () => api.get('/topics/'),
  getById: (id) => api.get(`/topics/${id}/`),
  create: (formData) => multipartApi.post('/topics/', formData),
  update: (id, formData) => multipartApi.patch(`/topics/${id}/`, formData),
  delete: (id) => api.delete(`/topics/${id}/`),
};

export const tagApi = {
  getAll: () => api.get('/tags/'),
  create: (data) => jsonApi.post('/tags/', data),
  delete: (id) => api.delete(`/tags/${id}/`),
};
