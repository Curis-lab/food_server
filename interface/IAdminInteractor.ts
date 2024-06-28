//I want to send a promise

export interface IAdminInteractor {
  vandorById(id:string):void,
  allVandors():void,
  create(input: any): void;
  login({email, password}:{email:string, password:string}): void;
  getProfile(): void;
  findVandor(id:string|undefined, email?:string): void;
}
