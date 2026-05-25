import { authApi } from "./auth-api";

export const checkAuth = async (): Promise<boolean> => {
  try {
    await authApi.get("/auth/me");

    return true;
  } catch {
    return false;
  }
};
