import express from 'express';
import dotenv from 'dotenv';
import clientConnectPrisma from './database/clientConnectPrisma';

import { router } from './routes/indexPrisma';

dotenv.config();

const client = clientConnectPrisma(process.env.DATABASE);
client!.connect().then(() => console.log('📦📦 Database connected!'))

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => {
  console.log('🚀🚀 Server Started!');
});

export { app };
 

