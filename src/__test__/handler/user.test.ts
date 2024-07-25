import { Vandor } from "../../../models";
import { mockRequest, mockResponse } from "../../__mocks__"
import HttpAdminController from "../../adapters/admin/http-admin.controller";
import { AdminRepository } from "../../adapters/common/repositories/vendor.resp";
import { AdminInteractor } from "../../use-cases/common/get-vendor-data/get-vendor-data.interactor";

const repository = new AdminRepository(Vandor);
const interactor = new AdminInteractor(repository);
const controller = new HttpAdminController(interactor);
describe("getUser",()=>{
    it("should return empty list",(done)=>{
        controller.onTestingAPI(mockRequest, mockResponse);
        expect(mockResponse.send).toHaveBeenCalledWith([])
    })
})