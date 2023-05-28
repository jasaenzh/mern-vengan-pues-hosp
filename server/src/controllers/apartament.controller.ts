import { Request, Response } from "express"
import { handleErrorResponse } from "../utils/error.handle"
import { deleteApartament, getApartament, getApartaments, registerApartament, updateApartament } from "../services/apartmanet.service"
import { handleSuccessResponse } from "../utils/response.handle"

// Guardar apartamento
const saveApartament = async (req: Request, res: Response) => {
    try {
        const { body } = req
        const response = await registerApartament(body);
        handleSuccessResponse(res, 200, response)
    } catch (error) {
        handleErrorResponse(res, 400, error, "Ocurrio un error mientras se creaba el apartamento")
    }
}

// Obtener apartamentos
const listApartaments = async (req: Request, res: Response) => {

    try {

        const response = await getApartaments()
        handleSuccessResponse(res, 200, response)
    } catch (error) {
        handleErrorResponse(res, 400, error, "Ocurrio un error mientras se obtenian los apartamentos")
    }

}

// Obtener apartamento por id
const detailApartamentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const response = await getApartament(id);
        handleSuccessResponse(res, 200, response)
    } catch (error) {
        handleErrorResponse(res, 400, error, "Ocurrio un error mientras se obtenia el apartamento")
    }
}

// Actualizar apartamento
const updateApartamentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { body } = req
        const response = await updateApartament(id, body);
        handleSuccessResponse(res, 200, response)
    } catch (error) {
        handleErrorResponse(res, 400, error, "Ocurrio un error mientras se obtenia el apartamento")
    }
}

const deleteApartamentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await deleteApartament(id)
        handleSuccessResponse(res, 200, response)
    } catch (error) {
        handleErrorResponse(res, 400, error, "Ocurrio un error mientras se obtenia el apartamento")
    }
}


export { listApartaments, saveApartament, detailApartamentById, updateApartamentById, deleteApartamentById }