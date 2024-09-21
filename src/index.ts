import { startHttpServer } from './http-server';

const init = async () => {
  try {
    startHttpServer();
  } catch (err) {
    console.log('Boot error', err);
  }
};

init();
