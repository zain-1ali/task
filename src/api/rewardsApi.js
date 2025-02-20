import axiosClient from "./axiosClient";

export const claimPollens = async (telegramId) => {
  const response = await axiosClient.post("/api/rewards/claim", { telegramId });
  return response.data;
};

export const getProgress = async (telegramId) => {
  const response = await axiosClient.get(`/api/rewards/progress/${telegramId}`);
  return response.data;
};

export const checkRewardClaimedToday = async (telegramId) => {
  const response = await axiosClient.get(`/api/rewards/checkRewardClaimedToday/${telegramId}`);
  return response.data;
};

export const resetProgress = async (telegramId) => {
  const response = await axiosClient.post("/api/rewards/reset", { telegramId });
  return response.data;
};

export const checkAndResetIfDayMissed = async (telegramId) => {
  const response = await axiosClient.post("/api/rewards/check-and-reset", {
    telegramId,
  });
  return response.data;
};
