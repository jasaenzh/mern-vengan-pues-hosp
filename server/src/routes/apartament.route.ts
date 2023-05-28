import { Router } from 'express';
import { deleteApartamentById, detailApartamentById, listApartaments, saveApartament, updateApartamentById } from '../controllers/apartament.controller';


const router = Router();

router.get("/", listApartaments)
router.get("/:id", detailApartamentById)
router.post("/", saveApartament)
router.put("/:id", updateApartamentById)
router.delete("/:id", deleteApartamentById)


export default router;