import { asValue, AwilixContainer } from "awilix";
import { Request, Response, NextFunction } from "express"
import ExpressResponseHandler from "../express-response-handler";

export default (container: AwilixContainer)=>{
    return(req: Request, res: Response, next:NextFunction)=>{
        const scope = container.createScope();
        scope.register({
            httpResponseHandler: asValue(new ExpressResponseHandler<any>(res))
        });
        req.container = scope;
        next();
    }
};