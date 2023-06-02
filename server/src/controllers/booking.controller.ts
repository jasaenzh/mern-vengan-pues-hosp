import { Request, Response } from "express"
import { handleErrorResponse } from "../utils/error.handle"
import { RequestExtended } from "../interfaces/request-extends"

// Obtener Reservas
const listBookings = async (req: RequestExtended, res: Response) => {

    try {
        res.send({
            data: 'listBookings',
            user: req.user
        })
    } catch (error) {
        handleErrorResponse(res, 400, error)
    }

}

const saveBooking = async (req: Request, res: Response) => {
    try {
        res.send('saveBookins')
    } catch (error) {
        handleErrorResponse(res, 400, error)
    }
}

export { listBookings, saveBooking }