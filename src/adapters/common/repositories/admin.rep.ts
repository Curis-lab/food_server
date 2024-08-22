import { injectable } from "inversify";
import { Vandor } from "../../../../models";

@injectable()
export class AdminRepository {
  private _client: any;
  constructor() {
    this._client = Vandor
  }
}
