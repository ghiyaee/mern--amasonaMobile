import Express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import data from '../backend/data.js';

dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then( ()=> {
  console.log('connected to db');
}).catch(err => {console.log(err.message) })

const app = Express()
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.get('/api/product/:brand', (req, res) => {
  const product = data.products.find((f) => f.brand === req.params.brand);
  product
    ? res.status(200).send(product)
    : res.status(404).send({ message: '!!!!محصولی یافت نشد' });
});
app.get('/api/product/brand/:id', (req, res) => {
  const product = data.products.find((f) => f._id == req.params.id);
  product
    ? res.status(200).send(product)
    : res.status(404).send({ message: '  است محصولی یافت نشد' });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`run sever at port http://localhost:${port}`);
});
