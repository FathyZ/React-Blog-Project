import { apiRequest } from './apiRequest';

export const authService = {
    register: (userData) => apiRequest('/register', {
    method: 'POST',
    body: JSON.stringify(userData),}),
    login: (credentials) => apiRequest('/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),

}