import { Request, Response } from 'express';

interface HelloResponse {
  hello: string;
}

// eslint-disable-next-line no-unused-vars
type HelloBuilder = (name: string) => HelloResponse;

const helloBuilder: HelloBuilder = (name) => ({ hello: name });

export const rootHandler = (_req: Request, res: Response) => res.send('API is working');

export const helloHandler = (req: Request, res: Response) => {
  const { params } = req;
  const { name = 'World' } = params;
  const response = helloBuilder(name);

  return res.json(response);
};
