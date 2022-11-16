// this will handle the request
// can be separated on controller and repositories

import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function listCategories(req: Request, res:Response) {
  try{
    const categories = await Category.find();

    return res.json(categories);
  } catch {
    res.sendStatus(500);
  }
}
