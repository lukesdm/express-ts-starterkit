import express from 'express';
import { rootHandler, helloHandler } from './handlers';

export const app = express();

app.get('/', rootHandler);
app.get('/hello/:name', helloHandler);
