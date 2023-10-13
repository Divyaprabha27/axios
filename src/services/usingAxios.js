import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response;
};

export const getUserById = async (userId) => {
  const response = await axios.get(`${BASE_URL}/users/${userId}`);
  return response;
};

export const addUser = async (payload) => {
  const response = await axios.post(`${BASE_URL}/users`, payload);
  return response;
};

export const updateUserById = async (userId, payload) => {
  const response = await axios.put(`${BASE_URL}/users/${userId}`, payload);
  return response;
};

export const deleteUserById = async (userId) => {
  const response = await axios.delete(`${BASE_URL}/users/${userId}`);
  return response;
};

