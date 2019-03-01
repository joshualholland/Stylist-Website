import { Router } from 'express';
import { buildUrl, instafeed } from 'instafeed-lite';
import config from '../config';

const router = Router();

router.get('/', (req, res, next) => {
    res.redirect(buildUrl(config.options));
})