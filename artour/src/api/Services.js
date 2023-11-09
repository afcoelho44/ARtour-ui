import axios from "axios";

const clientApi = axios.create({
  baseURL: "http://localhost:8080",
});

export const getAllUsersApi = () => clientApi.get(`/api/user/all`);

export const saveUserApi = (newUser) =>
  clientApi.post(`/api/user/create`, newUser);

export const getUserByIdApi = (id) => clientApi.get(`/api/user/${id}`);
