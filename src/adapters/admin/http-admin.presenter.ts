import Presenter from "../../use-cases/presenter";
import { httpResponseHandler } from "../common/models/http-response";

interface VandorPresenterResponse{
    data:any
}

interface HTTPAdminPresenterResponse{
    httpResponseHandler: httpResponseHandler<VandorPresenterResponse>;
}

export default class HTTPAdminPresenter implements Presenter<VandorPresenterResponse>{
    private _responseHandler: httpResponseHandler<VandorPresenterResponse>
    constructor(params:HTTPAdminPresenterResponse){
        this._responseHandler = params.httpResponseHandler;
    }
    public showSuccess(response: VandorPresenterResponse): void {
        const view = {
            statusCode:200,
            body:{
                data: response
            }
        };
        return this._responseHandler.send(view);
    }
    public showError(error: Error): void {
    
    }
    
}