import mongoose, { Schema } from 'mongoose';

let ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100
  },
  price: {
    type: Number,
    required: true
  },
});

const ProductModel = mongoose.model('Product', ProductSchema);

export default ProductModel;
