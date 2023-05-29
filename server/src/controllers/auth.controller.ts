import { Request, Response } from "express";
import { loginUser, saveNewUser } from "../services/auth.service";
import { handleErrorResponse } from "../utils/error.handle";
import { handleSuccessResponse } from "../utils/response.handle";


const registerUser = async (req: Request, res: Response) => {

    try {
        const { body } = req;

        const newUser = await saveNewUser(body)

        handleSuccessResponse(res, 200, newUser)

    } catch (error) {
        handleErrorResponse(res, 400, error, "Ocurrio un error mientras se creaba el usuario")
    }


}

const getLoginUser = async (req: Request, res: Response) => {

    try {
        const { email, password } = req.body;
        const responseUser = await loginUser({ email, password })
        handleSuccessResponse(res, 200, responseUser)
    } catch (error) {
        handleErrorResponse(res, 400, error, "Ocurrio un error en la busqueda del usuario")
    }



}

export { registerUser, getLoginUser }