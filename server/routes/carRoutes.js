import { Router } from 'express';
import { getCars, getCarById, createCar, updateCar, deleteCar } from '../controllers/carController.js';

const router = Router();

router.route('/')
  .get(getCars)
  .post(createCar); // POST /api/cars

router.route('/:id')
  .get(getCarById)
  .patch(updateCar)
  .delete(deleteCar);

export default router;
