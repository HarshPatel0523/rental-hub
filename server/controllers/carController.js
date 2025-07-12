import Car from '../models/Car.js';

// Get all cars
export const getCars = async (_req, res) => {
  try {
    const cars = await Car.find().sort({ createdAt: -1 });
    return res.json(cars);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};

// Get single car
export const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: 'Car not found' });
    return res.json(car);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: err.message });
  }
};

// Create new car (admin-only in future)
export const createCar = async (req, res) => {
  try {
    const car = await Car.create(req.body);
    return res.status(201).json(car);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: err.message });
  }
};

// Update car
export const updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!car) return res.status(404).json({ message: 'Car not found' });
    return res.json(car);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: err.message });
  }
};

// Delete car
export const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) return res.status(404).json({ message: 'Car not found' });
    return res.json({ message: 'Car deleted' });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: err.message });
  }
};
