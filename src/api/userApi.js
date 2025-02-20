import axiosClient from "./axiosClient";

export const userAuthenticator = async (telegramData) => {
  const response = await axiosClient.post("/api/user/userAuthenticator", {
    ...telegramData,
  });
  return response.data;
};
