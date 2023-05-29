import { Router } from 'express';
import { getLoginUser, registerUser } from '../controllers/auth.controller';

const router = Router();

router.post('/registrarse', registerUser)
router.post('/iniciar-sesion', getLoginUser)

export default router;