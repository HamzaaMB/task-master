import mongoose from 'mongoose';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import router from './config/router';
import cors from 'cors'
import { dbConfig } from './config/dbConfig';

const app = express();
const port = 3001;

const __dirname = path.resolve()
app.use(express.static(`${__dirname}/frontend/build`))

const startServer = async () => {

  try {
    const connectionString = `mongodb+srv://${dbConfig.username}:${dbConfig.password}@${dbConfig.cluster}.${dbConfig.dbName}.mongodb.net/?retryWrites=true&w=majority`;
    await mongoose.connect(connectionString);
    console.log('👍 Database has connected successfully')
    app.use((req, res, next) => {
      console.log(`🚨 Incoming ${req.method} request on URL ${req.url}`)
      next()
    })

    /*Middleware*/
    app.use(express.json())
    app.use(cors());

    app.use('/api', router)

    app.listen(port, () => console.log(`🏃‍♂️ Express is up and running on port ${port}`))

  } catch (err) {
    console.log('🚨 Something has gone wrong with the DB connection')
    console.log(err)
  }
}

startServer()

