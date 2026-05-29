import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export const getProjects = async () => {
  const response = await axios.get(`${API}/projects`);

  return response.data;
};

export const createProject = async (data: any) => {
  const response = await axios.post(`${API}/projects`, data);

  return response.data;
};

export const updateProject = async (id: number, data: any) => {
  const response = await axios.patch(`${API}/projects/${id}`, data);

  return response.data;
};

export const deleteProject = async (id: number) => {
  const response = await axios.delete(`${API}/projects/${id}`);

  return response.data;
};
