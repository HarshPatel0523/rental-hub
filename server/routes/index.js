import { Router } from 'express';
import carRoutes from './carRoutes.js';
import bookingRoutes from './bookingRoutes.js';
import userRoutes from './userRoutes.js';
import contactRoutes from './contactRoutes.js';
import adminRoutes from './adminRoutes.js';

const router = Router();

router.use('/cars', carRoutes);
router.use('/bookings', bookingRoutes);
router.use('/users', userRoutes);
router.use('/contact', contactRoutes);
router.use('/admin', adminRoutes);

export default router;
