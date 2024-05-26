import {Response, Request, NextFunction } from "express";
import { plainToClass } from "class-transformer";
import { CreateCustomerInputs } from "../dto/Customer.dto";
import {validate} from 'class-validator';
import { GenerateOTP, GeneratePassword, generateSalt, GenerateSignature, onRequestOTP } from "../utility";
import { Customer } from "../models/Customer";
import { sign } from "crypto";

export const CustomerSignUp = async(req: Request, res:Response, next: NextFunction)=>{
    const customerInputs = plainToClass(CreateCustomerInputs, req.body);
    const inputErrors = await validate(customerInputs,{validationError:{target:true}});
    if(inputErrors.length > 0){
        return res.status(400).json(inputErrors);
    }    
    const {email, phone, password} = customerInputs;
    const salt = await generateSalt();
    const userPassword = await GeneratePassword(password, salt);
    const {otp, expiry} = GenerateOTP();
    console.log(expiry)
    const result = await Customer.create({
        email,
        password:userPassword,
        salt,
        firstName:'',
        lastName:'',
        phone,
        address:'anke',
        varified:false,
        otp,
        otp_expiry:expiry,
        lat:29929,
        lng:39938
    });
    // if(result){
    //     const signature = GenerateSignature({
    //         _id:result._id,
    //         email:result.email,
    //         verified:result.varified
    //     });
    //     return res.json(signature);
    // }
    //otp services
    if(result){
        const requestedOTP = await onRequestOTP(otp, phone);
        console.log('typeof result._id', typeof result._id);
        return res.status(201).json(requestedOTP);
        // const signature = GenerateSignature({
        //     _id:result._id,
        //     email:result.email,
        //     verified:result.varified
        // })
        // return res.status(201).json(signature)
    }
    return res.status(200).json(result);
}
