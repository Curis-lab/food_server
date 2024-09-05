//for return data persistence

export default interface VendorPersistenceData{
    _id?: string;
    name: string;
    ownerName: string;
    pinCode: string;
    address: string;
    phone: string;
    email: string;
    password: string;
    salt: string;
    serviceAvailable: boolean;
    coverImage: string[];
    rating: number;
    foodType: string[];
    foods: any;
}