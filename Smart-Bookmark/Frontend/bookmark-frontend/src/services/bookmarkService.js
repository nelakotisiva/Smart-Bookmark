import axios from "axios";

const API = "http://localhost:8080/api/bookmarks";

export const getAllBookmarks = () => axios.get(API);
export const getBookmark = (id) => axios.get(`${API}/${id}`);
export const addBookmark = (data) => axios.post(API, data);
export const updateBookmark = (id,data) => axios.put(`${API}/${id}`, data);
export const deleteBookmark = (id) => axios.delete(`${API}/${id}`);
