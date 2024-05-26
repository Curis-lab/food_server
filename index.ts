import express from 'express';
import dbConnection from './services/Database';
import App from './services/ExpressApp';

const StartServer = async()=>{
  const app = express();
  await dbConnection();
  await App(app);
  app.listen(8080, ()=>{
    console.log('listing to port 8080');
  });  
}

StartServer();