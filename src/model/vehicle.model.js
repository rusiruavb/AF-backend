import mongoose, { Schema } from 'mongoose';

const VehicleSchema = new Schema({
  code: { type: String, required: true, trim: true },
  model: { type: String, required: true, trim: true },
  type: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  categories: [{ type: Schema.Types.ObjectId, required: false, ref: 'categories' }]
});

const Vehicle = mongoose.model('vehicles', VehicleSchema);
export default Vehicle;