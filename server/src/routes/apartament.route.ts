import { Router } from 'express';
import { listApartament, saveApartament } from '../controllers/apartament.controller';


const router = Router();

router.get("/", listApartament)
router.post("/", saveApartament)


export default router;