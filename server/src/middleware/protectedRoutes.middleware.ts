import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt.handle';
import { RequestExtended } from '../interfaces/request-extends';

const checkJWT = (req: RequestExtended, res: Response, next: NextFunction) => {
    try {
        // Me fijo si hay un jwt en el header
        const jwtByUser = req.headers.authorization || '';

        // el jwtByUser.split( ' ').pop() es para sacar el token del header (Authorization: Bearer token)
        const jwt = jwtByUser.split(' ').pop();
        const isUser = verifyToken(`${jwt}`) as { id: string }
        if (!isUser) {
            return res.status(401).json('Sesion no valida')
        } else {
            req.user = isUser;
            next();
        }

    } catch (error) {
        res.status(400).json('Sesion no valida')
    }
}

export { checkJWT };