import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function listOrders(req: Request, res:Response) {
  try{
    const orders = await Order
      .find()
      .sort({ createdAt: 1}) // asc
      .populate('products.product');

    return res.json(orders);
  } catch {
    res.sendStatus(500);
  }
}
