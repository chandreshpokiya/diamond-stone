import express from 'express';
import { diamondDescPage } from '../controllers/mainController.js';
import checkAuth from '../utils/checkAuth.js';
import authRoute from './authRoute.js';
import diamondRoute from './diamondRoute.js';

const router = express.Router();

router.use('/auth', authRoute);
router.get('/', checkAuth, diamondDescPage);

router.use('/diamond', checkAuth, diamondRoute);

export default router;
