import { Response } from 'express';

interface ErrorResponse {
    error: string;
}

const handleError = (res: Response, error: string, statusCode = 500) => {
    const response: ErrorResponse = {
        error: error
    };

    res.status(statusCode).json(response);
};

export { handleError };