export const GenerateOTP = () => {
  const otp = Math.floor(10000 + Math.random() + 90000);
  let expiry = new Date();

  expiry.setTime(new Date().getTime() + 30 * 60 * 1000);
  return { otp, expiry };
};

export const onRequestOTP = async (otp: number, to: string) => {
  const accountSid = "ACe4ffc4d502e8a74235141b9cba97cffe";
  const authToken = "7524dd733575605cff06f7785a692665";

  const client = require("twilio")(accountSid, authToken);
  const response = await client.messages.create({
    body: `Your OTP is ${otp}`,
    from: "+13343264997",
    to: "+959676551616",
  });
  return response;
};
