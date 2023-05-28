import { Response } from "express"


const handleResponse = (res: Response, statusCode: number, data: any) => {
    res.status(statusCode).json({
        error: false,
        data: data
    })
}

export { handleResponse }