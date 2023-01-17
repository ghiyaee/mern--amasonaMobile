import express, { json, urlencoded } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import chalk from 'chalk';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import productRoute from './routes/producRoute.js';
import productRouteId from './routes/productRouterId.js';
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(chalk.bgGreen.white.bold('connected to db'));
  })
  .catch((err) => {
    console.log(chalk.bgRed.white.bold(err.message));
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((err,req,res,next)=>{
  res.status(500).send({message:err.message})
})

app.use('/api/seeds', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/product', productRoute);
app.use('/api/product',productRouteId)
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`run sever at port http://localhost:${port}`)
});
