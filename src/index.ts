import express from 'express';
import App from './api/app';
import DBConnection from './database/connection';





const StartServer = async () => {

    const app = express();

    await App(app);
    await DBConnection();



    app.listen(9000, () => {
      console.log("Listening on PORT 9000");
    }).on('error', (err) => {
      console.log('Error', err);
      process.exit(1);
    });

}

StartServer(); 