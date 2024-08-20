import { NextFunction, Request, Response } from "express";
import { Container, inject, injectable } from "inversify";
import "reflect-metadata";
import { Vandor } from "../../../models";

const TYPES = {
  FunctionRegistry: Symbol.for("FunctionRegistry"),
};

const functionRegistry = {
  sayHello: async()=>{
    const vendorData = {
        name:"tuntun",
        ownerName:"tuntun",
        foodType:"fksd",
        pinCode:"fii",
        address:"fiowe",
        phone:"fiowe",
        email:"fiowe",
        password: "userPassword",
        salt:"fsdf",
        serviceAvailable: false,
        coverImage: [""],
        rating: 2,
      }
    await Vandor.create(vendorData).then(()=>console.log('Success')).catch(err=>console.log('error'));
  },
};

@injectable()
class MyService {
  constructor(
    @inject(TYPES.FunctionRegistry) private registry: Record<string, Function>
  ) {
    
  }
  callFunctionByName(functionName: string) {
    if (this.registry[functionName]) {
      this.registry[functionName]();
    } else {
      console.log("Function name is not found");
    }
  }
}

const container = new Container();
container
  .bind<Record<string, Function>>(TYPES.FunctionRegistry)
  .toConstantValue(functionRegistry);
container.bind<MyService>(MyService).toSelf();

const myService = container.get(MyService);

export function executeRule(rule: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    myService.callFunctionByName(rule);
    
    return res.send("hello");
  };
}

export class MainAdminController {
  createVendor() {
    return executeRule("sayHello");
  }
}
