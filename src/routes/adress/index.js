import { Router } from 'express';
import getAdresses from './middleware/findAll';
import findOne from './middleware/findOne';

const router = Router();

router.get('/', getAdresses);

router.get('/:search', findOne);


module.exports = router;
