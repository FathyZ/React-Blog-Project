const BASE_URL = 'https://react-blog-project-production.up.railway.app';

export const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers,
  }
  const response = await fetch(`${BASE_URL}${endpoint}`, {...options, headers });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData || 'API request failed');
  }
    return response.json();
}