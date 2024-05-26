export interface CreateVandorInput{
    name:string;
    ownerName:string;
    foodType:[string];
    pinCode:string;
    address:string;
    phone:string;
    email:string;
    password:string;
}

export interface VandorLoginInput{
    email:string;
    password:string;
}

export interface VandorPayload{
    _id:string;
    email:string;
    name:string;
}

export interface EditVandorInputs{
    name:string;
    address:string;
    phone:string;
}