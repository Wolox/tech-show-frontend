import api from '../config/api'

export const login = (email, password) =>
  api.post('/users/login', { email, password })
