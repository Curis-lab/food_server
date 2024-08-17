import { Response } from "express";
import HTTPResponse from "../adapters/common/models/http-response";

export default class ExpressResponseHandler<T>{
    private _response: Response;
    constructor(response: Response){
        this._response = response;
    }
    send(data: HTTPResponse<T>): any{

        this._response.status(data.statusCode);
        if(data.body){
            return this._response.json(data.body);
        }
        return this._response.send(data.message)
    }
}