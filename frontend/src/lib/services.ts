import { api } from './api';
import type { Career, Teacher, News } from '@/types';

// Careers
export const careersService = {
  getAll: () => api.get<Career[]>('/careers'),
  getBySlug: (slug: string) => api.get<Career>(`/careers/slug/${slug}`),
  getById: (id: string) => api.get<Career>(`/careers/${id}`),
};

// Teachers
export const teachersService = {
  getAll: () => api.get<Teacher[]>('/teachers'),
  getById: (id: string) => api.get<Teacher>(`/teachers/${id}`),
  getByCareer: (careerId: string) => api.get<Teacher[]>(`/teachers?careerId=${careerId}`),
};

// News
export const newsService = {
  getAll: () => api.get<News[]>('/news'),
  getById: (id: string) => api.get<News>(`/news/${id}`),
};

// Health
export const healthService = {
  check: () => api.get<{ status: string; timestamp: string }>('/health'),
};
