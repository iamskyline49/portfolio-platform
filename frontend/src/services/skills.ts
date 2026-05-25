import { api } from "@/lib/api";

export const getSkills = async () => {
  const res = await api.get("/skills");

  return res.data;
};
