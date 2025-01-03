import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();
const PORT = 5500;

app.use(cors());
app.use(express.json());

routes(app);

app.listen(PORT, () => {
  console.log(`Servidor está rodando em http://127.0.0.1:${PORT}`);
});
