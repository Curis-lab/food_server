export const GenerateOTP = () => {
  const otp = Math.floor(10000 + Math.random() + 90000);
  const expiry = new Date();

  expiry.setTime(new Date().getTime() + 30 * 60 * 1000);
  return { otp, expiry };
};
