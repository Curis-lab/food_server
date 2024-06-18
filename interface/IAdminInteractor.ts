//process on bussiness logic
// entities layer
export interface IAdminInteractor {
  create(input: any): void;
  login({email, password}:{email:string, password:string}): void;
  getProfile(): void;
  findVandor(id:string|undefined, email?:string): void;
}
