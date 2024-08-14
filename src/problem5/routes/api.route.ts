import { Router } from 'express';
import ResourceRoute from './resource.route'

const router = Router();

router.use('/resources', ResourceRoute);

export default router;
