import bcyrpt from 'bcrypt';

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
