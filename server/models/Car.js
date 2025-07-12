import mongoose from 'mongoose';

const carSchema = new mongoose.Schema(
  {
    model: { type: String, required: true },
    brand: { type: String, required: true },
    pricePerDay: { type: Number, required: true },
    seats: { type: Number, default: 4 },
    transmission: { type: String, enum: ['Manual', 'Automatic'], default: 'Manual' },
    fuelType: { type: String, enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid'], default: 'Petrol' },
    description: { type: String, default: '' },
    features: [{ type: String }],
    image: { type: String }, // URL or path
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model('Car', carSchema);
