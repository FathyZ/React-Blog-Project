import { apiRequest } from "./apiRequest";

export const postService = {
    getAll: () => apiRequest('/posts'),

  create: (postData) => apiRequest('/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
  }),

  delete: (id) => apiRequest(`/posts/${id}`, {
    method: 'DELETE',
  }),

  update: (id, postData) => apiRequest(`/posts/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(postData),
  }),
}