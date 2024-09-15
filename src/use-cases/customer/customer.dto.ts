export type customerDTO = {
  email: string;
  password: string;
  salt: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  verified: boolean;
  otp: number;
  otp_expiry: Date;
  lat: number;
  lng: number;
};

export type customerInputDTO = Omit<customerDTO, 'salt' | 'otp' | 'otp_expiry'>;
