import { Router, Request, Response } from 'express';

const router = Router();

// Mensaje ruta principal
router.get("/", (req: Request, res: Response) => {
    res.send("Bienvenido a mi API REST Vengan Pues");
})


export default router;


