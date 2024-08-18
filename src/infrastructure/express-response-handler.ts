import { Response } from "express";
import HTTPResponse from "../adapters/common/models/http-response";
import { injectable } from "inversify";

@injectable()
export default class ExpressResponseHandler{
    send(data:any){
        return data;
    }
}