import { Router } from 'express';
import { registerUser, authUser } from '../controllers/userController.js';

const router = Router();

router.post('/register', registerUser); // POST /api/users/register
router.post('/login', authUser);        // POST /api/users/login

export default router;
