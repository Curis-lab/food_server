import bcyrpt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const generateSalt = async () => {
  return await bcyrpt.genSalt();
};

export const GeneratePassword = async (password: string, salt: string) => {
  return bcyrpt.hash(password, salt);
};

export const validatePassword = async (
  enteredPassword: string,
  savedPassword: string,
  salt: string,
) => {
  return (await GeneratePassword(enteredPassword, salt)) === savedPassword;
};
export function generateSignature(payload: { id: string; email: string }) {
  return jwt.sign(payload, process.env.jwt_sec as string, { expiresIn: '1d' });
}
