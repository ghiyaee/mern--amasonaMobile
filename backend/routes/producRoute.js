import express from 'express';
import Product from '../models/productModel.js';
const productRoute = express.Router();
productRoute.get('/:brand', async (req, res) => {
  const product = await Product.findOne({ brand: req.params.brand });
  product
    ? res.status(200).send(product)
    : res.status(404).send({ message: '!!!!محصولی یافت نشد' });
});

export default productRoute;
