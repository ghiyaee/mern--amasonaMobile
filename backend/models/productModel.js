import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    categoty: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: Number, require: true },
    countInStock: { type: Number, require: true },
    brand: { type: String, require: true, },
    rating: { type: Number, require: true },
    numberReviews: { type: Number, require: true },
    descp: { type: String, require: true },
  },
    {
        timestamps: true
    }
);
const Product = mongoose.model('Product', productSchema);
export default Product;