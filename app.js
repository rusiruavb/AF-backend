import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import databaseconnection from './database/connection';
import routes from './routes';

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 9098;

app.route('/').get((req, res) => {
  res.send('<b>AF Final - Backend API</b>')
});

app.listen(PORT, () => {
  console.log(`Server start running on PORT ${PORT}`);
  databaseconnection();
  routes();
});