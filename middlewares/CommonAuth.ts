import { NextFunction, Request, Response } from "express";
import { AuthPayload } from "../dto/Auth.dot";
import { ValidateSignature } from "../utility";


declare global{
    namespace Express{
        interface Request{
            user?: AuthPayload
        }
    }
}

export const Authenticate = async(req: Request, res: Response, next: NextFunction)=>{
    const validate = await ValidateSignature(req);
    if(validate){
        next();
    }else{
        return res.json({message:"user is not authenrize"});
    }
}