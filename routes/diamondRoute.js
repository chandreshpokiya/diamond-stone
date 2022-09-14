import express from 'express';
import { addDiamond, addDiamondPage, filterDiamond } from '../controllers/diamondController.js';

const router = express.Router();

router.post('/diamondfilter', filterDiamond);

router.get('/adddiamond', addDiamondPage);

router.post('/adddiamond', addDiamond);

export default router;
