import { injectable } from "inversify";
import { Response } from "express";

@injectable()
export default class VendorPresenter {
  public showSuccess(data: any, res: Response) {
    const view = {
      statusCode: 200,
      body: {
        data,
      },
    };

    return res.status(view.statusCode).json(view.body);
  }
  public showError(msg: string,res: Response) {
    return res.status(404).json(msg);
  }
}
