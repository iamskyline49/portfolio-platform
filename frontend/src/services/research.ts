import { api } from "@/lib/api";

export const getResearch = async () => {
  const res = await api.get("/research");

  return res.data;
};
