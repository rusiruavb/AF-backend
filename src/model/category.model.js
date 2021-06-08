import mongoose, { Schema } from 'mongoose';

const CategorySchema = new Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  vehicles: [{ type: Schema.Types.ObjectId, required: false, ref: 'vehicles' }]
});

const Category = mongoose.model('categories', CategorySchema);

export default Category;

