import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

// Admin login
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email, role: 'admin' });
    // Auto-create default admin account if not exists and credentials match predefined ones
    if (!user && email === 'rentalhub@gmail.com' && password === 'rentalhub') {
      user = await User.create({ name: 'Admin', email, password, role: 'admin' });
    }
    if (user && (await user.matchPassword(password))) {
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    }
    return res.status(401).json({ message: 'Invalid admin credentials' });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: err.message });
  }
};
