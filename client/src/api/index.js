import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" })



export const fetchPosts = () => API.get('/posts');
export const cretePost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, post) => API.patch(`/posts/${id}`, post);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const updateLikeCount = (id) => API.patch(`/posts/${id}/likeCount`);

