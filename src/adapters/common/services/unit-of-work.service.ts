import { UnitOfWork } from '../interfaces/unit-of-work';

type GConstructor<T = {}> = new (...args: any[]) => T;

export function MixUnitOfWorkServices< TBase extends GConstructor>(baseUrl: TBase) {
  return class extends baseUrl implements UnitOfWork {
    public async startTransaction(): Promise<void> {
      console.log('start transaction');
    }
    public async commitTransaction(): Promise<void> {
      console.log('commit transaction');
    }
    public async rollbackTransaction(): Promise<void> {
      console.log('rollbackTransaction');
    }
  };
}
