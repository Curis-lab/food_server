import { Response } from 'express';

export default class CustomerPresenter {
  public showSuccess(data: any, res: Response) {
    return res.status(200).send(data);
  }
  public showPangination(data: any, res: Response) {
    return res.status(200).send({ data, length: data.length });
  }
  public showError(msg: string, res: Response) {
    return res.send(404).send(msg);
  }
}
