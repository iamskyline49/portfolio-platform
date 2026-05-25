import { api } from "@/lib/api";

export const getProjects = async () => {
  const res = await api.get("/projects");

  return res.data;
};
