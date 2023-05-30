import { sign, verify } from "jsonwebtoken";

// Constante que importa as el secret de la app
const JWT_SECRET = process.env.JWT_SECRET;

// Función que genera el token
const generateToken = (id: string) => {
    const jwt = sign({ id }, `${JWT_SECRET}`, {
        expiresIn: '2h'
    });
    return jwt;
}

// Función que valida el token
const verifyToken = (jwt: string) => {
    const isValid = verify(jwt, `${JWT_SECRET}`);
    return isValid;
}

export { generateToken, verifyToken };