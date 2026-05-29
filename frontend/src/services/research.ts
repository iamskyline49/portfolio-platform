import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export const getResearch = async () => {
  const response = await axios.get(`${API}/research`);

  return response.data;
};

export const createResearch = async (data: any) => {
  const response = await axios.post(`${API}/research`, data);

  return response.data;
};

export const updateResearch = async (id: number, data: any) => {
  const response = await axios.patch(`${API}/research/${id}`, data);

  return response.data;
};

export const deleteResearch = async (id: number) => {
  const response = await axios.delete(`${API}/research/${id}`);

  return response.data;
};
