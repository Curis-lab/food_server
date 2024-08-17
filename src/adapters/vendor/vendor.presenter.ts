import { HTTPResponseHandler } from "../common/models/http-response";

export default class HTTPVendorPresenter{
    private _responseHandler: HTTPResponseHandler<any>;
    constructor(params:any){
        this._responseHandler = params.HTTPResponseHandler;
    }
    public showSuccess(response: any){
        const view = {
            statusCode:200,
            body:{
                data: response
            }
        };
        return this._responseHandler.send(view);
    }
    public showError(error:Error){
        return this._responseHandler.send({statusCode: 500, message: 'Unexpected server error'});
    }
}