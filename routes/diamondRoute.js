import express from 'express';
import { addDiamond, addDiamondPage, filterDiamond, getDiamonds } from '../controllers/diamondController.js';

const router = express.Router();

router.post('/diamondfilter', filterDiamond);

router.get('/adddiamond', addDiamondPage);

router.post('/adddiamond', addDiamond);

router.get('/diamondlist', getDiamonds)

export default router;
