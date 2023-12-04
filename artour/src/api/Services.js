import axios from "axios";

const clientApi = axios.create({
  baseURL: "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
});

// (-----------------Users----------------------)
export const getAllUsersApi = () => clientApi.get(`/api/user/all`);

export const saveUserApi = (newUser) =>
  clientApi.post(`/api/user/create`, newUser);

export const getUserByIdApi = (id) => clientApi.get(`/api/user/${id}`);

export const updateUserApi = (id, user) =>
  clientApi.put(`/api/user/update/${id}`, user);

export const deleteUserApi = (id) => clientApi.delete(`/api/user/delete/${id}`);

// (------------------Commments---------------------)
export const getAllCommentsApi = () => clientApi.get(`/api/comentary/all`);

export const getCommentByIdApi = (id) => clientApi.get(`/api/comentary/${id}`);

export const approvedCommentApi = (id, approved) =>
  clientApi.patch(`/api/comentary/approved/${id}`, approved, {
    transformRequest(approved, headers) {
      return approved;
    },
  });

export const getApprovedCommentsFromEstablishment = (idEstablishment) => clientApi.get(`/api/comentary/estabishment/${idEstablishment}`);
// (---------------------Establishment------------------------------)
export const getAllEstablishmentApi = () => clientApi.get(`/api/establishment/all`);

export const getEstablishmentByIdApi = (id) => clientApi.get(`/api/establishment/${id}`);

export const saveEstablishmentApi = (newEstablishment) =>
  clientApi.post(`/api/establishment/create`, newEstablishment);

export const updateEstablishmentApi = (id, establishment) =>
  clientApi.put(`/api/establishment/update/${id}`, establishment);

export const deleteEstablishmentApi = (id) => clientApi.delete(`/api/establishment/delete/${id}`);