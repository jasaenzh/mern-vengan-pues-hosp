import { Response } from 'express';

interface ErrorResponse {
    success: false;
    error: string;
    message?: string | null;
}

// const handleErrorResponse = (res: Response, statusCode: number, error: string, message?: string) => {
//     res.status(statusCode).json({
//         success: false,
//         error: error,
//         message: message || null
//     });
// };

const handleErrorResponse = (res: Response, statusCode: number, error: any, message?: string) => {
    const response: ErrorResponse = {
        success: false,
        error: error.message || error.toString(),
        message: message || null
    };

    res.status(statusCode).json(response);
};

export { handleErrorResponse };