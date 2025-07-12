import { Router } from 'express';
import { createBooking, getBookings, updateBookingStatus } from '../controllers/bookingController.js';

const router = Router();

router.route('/')
  .post(createBooking)   // POST /api/bookings
  .get(getBookings);     // GET /api/bookings?email=user@example.com

router.route('/:id')
  .patch(updateBookingStatus); // PATCH /api/bookings/:id

export default router;
