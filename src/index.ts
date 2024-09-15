import { AwilixContainer } from 'awilix';
import { startHttpServer } from './http-server';

declare global {
  namespace Express {
    export interface Request {
      container: AwilixContainer;
    }
  }
}
let server: any = null;

const init = async () => {
  try {
    server = startHttpServer();
  } catch (err) {
    console.log('Boot error', err);
  }
};

init();
