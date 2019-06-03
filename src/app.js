import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { productRoutes } from './routes';

// Enable usage of environment variables from .env
dotenv.config();

const app = express();

// Mount app middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));

// Mongo configuration section
let mongoDB = process.env.DEV_DB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true, useFindAndModify: false });
mongoose.Promise = global.Promise;
let db = mongoose.connection;

// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/product', productRoutes);

export default app;
