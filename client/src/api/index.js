import axios from "axios";

const API = axios.create({ baseURL: "https://server-five-eta.vercel.app/" })



export const fetchPosts = () => API.get('/posts');
export const cretePost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, post) => API.patch(`/posts/${id}`, post);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const updateLikeCount = (id) => API.patch(`/posts/${id}/likeCount`);

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);
