import { plainToClass } from 'class-transformer';
import {Request, Response, NextFunction}from 'express';
import { CreateCustomerInputs, OrderInputs, UserLoginInputs } from '../dto/Customer.dto';
import {  validate} from 'class-validator';
import { Customer, Food } from '../models';
import { GeneratePassword, generateSalt, GenerateSignature, validatePassword } from '../utility';


interface CustomerSignup{
    email:string;
    password:string;
    firstName:string;
    lastName:string;
    address:string;
    phone:string;
}
export const CustomerSignUp = async(req: Request, res:Response, next:NextFunction)=>{
    const inputer = <CustomerSignup>req.body; 
    const customerInputs = plainToClass(CreateCustomerInputs, {email:inputer.email, password:inputer.password, phone:inputer.phone});
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
    const {firstName, lastName, address} = {firstName: inputer.firstName, lastName:inputer.lastName, address:inputer.address}
    const passwordWithSalt = await GeneratePassword(password, salt);
    const customer = await Customer.create({
        firstName,
        lastName,
        address,
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
    return res.json({message: 'do not show any'});
}

export const EditProfile = async(req: Request, res:Response, next: NextFunction)=>{
    
    const customer = req.user;
    if(customer){}
}

export const CreateOrder = async(req: Request, res:Response, next:NextFunction)=>{
    const customer = req.user;
    if(customer){
        const orderId = `${Math.floor(Math.random()*8999)+1000}`;
        const profile = await Customer.findById(customer._id);
        const cart = <[OrderInputs]>req.body;

        let cartItems = Array();
        
        let netAmount = 0.0;
        const foods = await Food.find().where('_id').in(cart.map(item=>item._id)).exec();
        foods.map(food=>{
            cart.map(({_id, unit})=>{
                if(food._id == _id){
                    netAmount += (food.price * unit);
                    cartItems.push({food, unit});
                }
            })
        });
    }    
}

