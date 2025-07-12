import { Router } from 'express';
import { sendMessage, getMessages } from '../controllers/contactController.js';

const router = Router();

router.route('/')
  .post(sendMessage)  // POST /api/contact
  .get(getMessages);  // GET /api/contact (admin)

export default router;
