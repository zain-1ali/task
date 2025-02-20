export const handleInviteClick = (referralUrl) => {
  const shareMessage = `Hey! 🚀 Join this amazing app and start earning rewards! Use my referral link to get started:${referralUrl}`;
  const telegramShareUrl = `https://telegram.me/share/url?url=${encodeURIComponent(
    shareMessage
  )}`;
  window.open(telegramShareUrl, "_blank", "noopener noreferrer");
};
