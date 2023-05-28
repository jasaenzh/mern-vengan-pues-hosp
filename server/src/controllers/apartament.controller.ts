import { Request, Response } from "express"
import { handleError } from "../utils/error.handle"
import { getApartaments, registerApartament } from "../services/apartmanet.service"
import { handleResponse } from "../utils/response"


const listApartament = async (req: Request, res: Response) => {

    try {

        const response = await getApartaments()
        handleResponse(res, 200, response)
    } catch (error) {
        handleError(res, "Ocurrio un error mientras se obtenian los apartamentos", 400)
    }

}

const saveApartament = async (req: Request, res: Response) => {
    try {
        const { body } = req
        const response = await registerApartament(body);
        handleResponse(res, 200, response)
    } catch (error) {
        handleError(res, "Ocurrio un error mientras se creaba el apartamento", 400)
    }
}

export { listApartament, saveApartament }