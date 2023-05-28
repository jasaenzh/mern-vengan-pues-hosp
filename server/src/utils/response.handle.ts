import { Response } from "express"


const handleSuccessResponse = (res: Response, statusCode: number, data: any, message?: string) => {
    res.status(statusCode).json({
        success: true,
        data: data,
        message: message || null
    });
};

export { handleSuccessResponse }