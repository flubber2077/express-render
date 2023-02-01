import express from 'express';
import thingsController from '../controllers/things.js';

const router = express.Router();

router.get('/things', (req, res) => {
    thingsController(req, res);
});

export default router;