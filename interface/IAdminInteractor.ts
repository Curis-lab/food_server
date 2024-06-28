//I want to send a promise

import { ICreateVandor } from "../interactors/AdminInteractor";
import { VandorDoc } from "../models";

// export interface IAdminInteractor {
//   vandorById(id:string):void,
//   allVandors():void,
//   createVandor(input: ICreateVandor): VandorDoc ;
//   login({email, password}:{email:string, password:string}): void;
//   getProfile(): void;
//   findVandor(id:string|undefined, email?:string): void;
// }
export interface IAdminInteractor {
  vandorById(id: string): Promise<VandorDoc | null>;
  allVandors(): Promise<VandorDoc[]>;
  createVandor(input: ICreateVandor): Promise<VandorDoc>;
  login({ email, password }: { email: string; password: string }): Promise<boolean>;
  getProfile(): Promise<VandorDoc | null>;
  findVandor(id: string | undefined, email?: string): Promise<VandorDoc | null>;
}
