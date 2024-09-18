import { Response } from 'express';
import { injectable } from 'inversify';

@injectable()
export default class AdminPresenter {
  public showSucces(data: any, res: Response) {
    const view = {
      statusCode: 200,
      body: data,
    };
    return res.status(view.statusCode).send(view.body);
  }
  public showError(msg: string, res: Response) {
    return res.status(404).json(msg);
  }
  public showPagnination(data: any, res: Response) {
    return res.status(200).send({ data, length: data.length });
  }
}
