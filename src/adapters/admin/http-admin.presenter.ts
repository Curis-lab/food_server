import Presenter from "../../use-cases/presenter";
import { httpResponseHandler } from "../common/models/http-response";

interface HTTPAdminPresenterResponse{
    httpResponseHandler: httpResponseHandler<{data:string}>;
}

export default class HTTPAdminPresenter implements Presenter<string>{
       
    constructor(params:string){}
    public showSuccess(response: string): void {
        const view = {
            statusCode:200,
            body:{
                data: response
            }
        };
    }
    public showError(error: Error): void {
    
    }
    
}