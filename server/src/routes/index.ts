import { Router, Request, Response } from 'express';
import apartamentRouter from './apartament.route'
import authRouter from './auth.route'

const router = Router();

// Mensaje ruta principal
router.get("/", (req: Request, res: Response) => {
    res.send("Bienvenido a mi API REST Vengan Pues");
})

router.use("/api/apartamentos", apartamentRouter)
router.use("/api/auth", authRouter)

router.use("*", (req: Request, res: Response) => {
    res.status(404).send(
        "No funcional"
    )
})


export default router;


