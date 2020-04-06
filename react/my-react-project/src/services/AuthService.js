import api from '../config/api';

export const login = params => api.post('/users/login', params);
