import Booking from '../models/Booking.js';

// Create a new booking
export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    return res.status(201).json(booking);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: err.message });
  }
};

// Get bookings (optionally filter by email)
export const getBookings = async (req, res) => {
  try {
    const { email } = req.query;
    const filter = email ? { email } : {};
    const bookings = await Booking.find(filter).sort({ createdAt: -1 });
    return res.json(bookings);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};

// Update booking status
export const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    return res.json(booking);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: err.message });
  }
};
