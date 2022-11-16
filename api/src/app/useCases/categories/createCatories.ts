import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategory(req: Request, res:Response) {
  try {
    const {icon, name} = req.body;

    const category = await Category.create({ icon, name });

    return res.send(category);
  } catch {
    res.sendStatus(500); //internal server error
  }
}
