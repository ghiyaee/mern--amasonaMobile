import Express from 'express';
import data from '../backend/data.js';
const app = Express();
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.get('/api/products/:brand', (req, res) => {
  const product = data.products.find((f) => f.brand === req.params.brand);
  product
    ? res.status(200).send(product)
    : res.status(404).send({ message: 'محصولی یافت نشد' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`run sever at port http://localhost:${port}`);
});
