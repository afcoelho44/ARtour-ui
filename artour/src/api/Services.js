import axios from "axios";

const clientApi = axios.create({
  baseURL: "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
});

export const getAllUsersApi = () => clientApi.get(`/api/user/all`);

export const saveUserApi = (newUser) =>
  clientApi.post(`/api/user/create`, newUser);

export const getUserByIdApi = (id) => clientApi.get(`/api/user/${id}`);

export const updateUserApi = (id, user) =>
  clientApi.put(`/api/user/update/${id}`, user);

export const deleteUserApi = (id) => clientApi.delete(`/api/user/delete/${id}`);

export const getAllCommentsApi = () => clientApi.get(`/api/comentary/all`);

export const getCommentByIdApi = (id) => clientApi.get(`/api/comentary/${id}`);

export const approvedCommentApi = (id, approved) =>
  clientApi.patch(`/api/comentary/approved/${id}`, approved, {
    transformRequest(approved, headers) {
      return approved;
    },
  });
