import { Router } from 'express';
import { listBookings, saveBooking } from '../controllers/booking.controller';
import { checkJWT } from '../middleware/protectedRoutes.middleware';


const router = Router();

router.get('/', listBookings);
router.post('/', checkJWT, saveBooking)

export default router;