import axios from "axios";

const clientApi = axios.create({
  baseURL: "http://localhost:8080",
});

export const getAllUsersApi = () => clientApi.get(`/api/user/all`);

export const saveUserApi = (newUser) =>
  clientApi.post(`/api/user/create`, newUser);

export const getUserByIdApi = (id) => clientApi.get(`/api/user/${id}`);

export const updateUserApi = (id, user) => 
  clientApi.put(`/api/user/update/${id}`, user);

export const deleteUserApi = (id) => clientApi.delete(`/api/user/delete/${id}`);