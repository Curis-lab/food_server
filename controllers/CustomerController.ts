import { plainToClass } from 'class-transformer';
import express ,{Request, Response, NextFunction}from 'express';
import { CreateCustomerInputs, UserLoginInputs } from '../dto/Customer.dto';
import { validate} from 'class-validator';
import { Customer } from '../models';
import { GeneratePassword, generateSalt, GenerateSignature, validatePassword } from '../utility';


export const CustomerSignUp = async(req: Request, res:Response, next:NextFunction)=>{
    const customerInputs = plainToClass(CreateCustomerInputs, req.body);
    const inputErrors = await validate(customerInputs, {validationError:{target:true}});
    if(inputErrors.length > 0){
        return res.status(400).json(inputErrors);
    }
    const {email, phone, password} = customerInputs;
    
    const existing_email = await Customer.findOne({email});
    if(existing_email !== null){
        return res.json({message:"exsiting user"});
    }
    const salt = await generateSalt();
    const passwordWithSalt = await GeneratePassword(password, salt);
    const customer = await Customer.create({
        email,
        password:passwordWithSalt,
        salt,
        phone
    });
    if(customer){
        const signature = GenerateSignature({
            _id:customer._id as string,
            email:customer.email
        });
        return res.status(201).json({signature, email: customer.email});
    }
}
export const CustomerLogin = async(req: Request, res:Response, next:NextFunction)=>{
    const loginInputs = plainToClass(UserLoginInputs, req.body);
    const inputErrors = await validate(loginInputs, {validationError:{target:true}});
    if(inputErrors.length > 0){
        return res.status(400).json(inputErrors);
    }
    
    const {email, password} = loginInputs;
    
    const customer = await Customer.findOne({email});
    
    if(customer){
        const validated = await validatePassword(password, customer.password, customer.salt);
        if(validated){
            const signature = GenerateSignature({
                _id: customer._id as string,
                email:customer.email
            });
            return res.status(200).json({signature, email:customer.email});
        }
    }
    return res.status(404).json({message:"Login Error"});
    
}

export const GetProfile = async(req: Request, res:Response, next:NextFunction)=>{
    const customer = req.user;

    if(customer){
        const profile = await Customer.findById(customer._id);
        return res.json(profile);
    }
    return res.json(customer);
}

export const EditProfile = async(req: Request, res:Response, next: NextFunction)=>{
    
    const customer = req.user;
    if(customer){}
}
