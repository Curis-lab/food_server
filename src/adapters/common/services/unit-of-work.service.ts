import { UnitOfWork } from "../interfaces/unit-of-work";

export function MixUnitOfWorkServices(baseUrl:any){
    return class extends baseUrl implements UnitOfWork{
        public async startTransaction():Promise<void>{
            console.log('start transaction');
        }               
        public async commitTransaction():Promise<void>{
            console.log('commit transaction');
        }
        public async rollbackTransaction():Promise<void>{
            console.log('rollbackTransaction');
        }
    }
}