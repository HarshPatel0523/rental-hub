import ContactMessage from '../models/ContactMessage.js';

export const sendMessage = async (req, res) => {
  try {
    const message = await ContactMessage.create(req.body);
    return res.status(201).json({ success: true, message: 'Message sent', data: message });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: err.message });
  }
};

export const getMessages = async (_req, res) => {
  try {
    const msgs = await ContactMessage.find().sort({ createdAt: -1 });
    return res.json(msgs);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};
