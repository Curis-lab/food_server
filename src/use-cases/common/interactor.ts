export class Interactor<inputModel, responseModel> {
  constructor() {}
  execute(input: inputModel): Promise<responseModel> {
    throw new Error('Method not implemented');
  }
}
