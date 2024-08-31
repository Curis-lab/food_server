export interface vendorTDO {
  name: string;
  ownerName: string;
  foodType: string[];
  pinCode: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  salt: string;
  serviceAvailable: boolean;
  coverImage: string[];
  rating: number;
  foods: any;
}

export type CreateVendorInput = Omit<vendorTDO, "salt" | "rating">;

export type responseVendors = {
  _id: string;
  name: string;
  ownerName: string;
  foodType: string[];
  pinCode: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  salt: string;
  serviceAvailable: boolean;
  coverImage: string[];
  rating: number;
  foods: any;
};
