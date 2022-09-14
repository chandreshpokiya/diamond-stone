import express from 'express';
import {
  loginPage, loginUser, logout, registerPage, registerUser,
} from '../controllers/authController.js';

const router = express.Router();

router.get('/login', loginPage);
router.get('/register', registerPage);

router.get('/logout', logout);

router.post('/login', loginUser);
router.post('/register', registerUser);

export default router;
