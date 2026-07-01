import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import productRouter from './src/routes/products.router.js';
import authRouter from './src/routes/auth.router.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: "API funcionando" }));
app.use('/api/products', productRouter);
app.use('/api/auth', authRouter);
app.use((req, res) => res.status(404).json({ error: "Ruta no encontrada" }));

export default app;