import bcyrpt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwt_sec } from '../../../config';
import {Request, Response}from 'express';
import { AuthPayload } from '../../../dto/Auth.dot';

export const generateSalt = async()=>{
    return await bcyrpt.genSalt()
}

export const GeneratePassword  = async(password:string, salt:string)=>{
    return bcyrpt.hash(password, salt);
}

export const validatePassword = async(enteredPassword:string, savedPassword:string, salt:string)=>{
    return await GeneratePassword(enteredPassword, salt) === savedPassword;
}

export const GenerateSignature = (payload: AuthPayload)=>{
    return jwt.sign(payload,jwt_sec, {expiresIn: '3d'});
}

export const ValidateSignature = async(req: Request)=>{
    const signature = req.get('Authorization');
    
    if(signature){
        const payload = jwt.verify(signature.split(' ')[1], jwt_sec) as AuthPayload;
        req.user = payload;
        return true;
    }
    return false;
}