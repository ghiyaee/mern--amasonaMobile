import express from 'express';
import Product from '../models/productModel.js';
const productRouteId = express.Router();
productRouteId.get('/brand/:id', async (req, res) => {
  const product = await Product.findById( req.params.id );
  product
    ? res.status(200).send(product)
    : res.status(404).send({ message: '!!!!محصولی یافت نشد' });
});

export default productRouteId;
