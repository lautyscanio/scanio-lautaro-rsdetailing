import AppError, { BadRequestError } from "../exceptions/AppError.js";
import { Messages } from "../enums/Messages.js";
import { sendError } from "../responses/ApiResponse.js";

// Único punto donde los errores se transforman en respuestas HTTP.
const errorHandler = (err, req, res, next) => {
    // express.json() lanza este error cuando el body no es un JSON bien formado
    if (err.type === "entity.parse.failed") {
        err = new BadRequestError(Messages.INVALID_JSON);
    }

    if (err instanceof AppError) {
        return sendError(res, err.message, err.statusCode);
    }

    console.error(err);
    return sendError(res, Messages.INTERNAL_ERROR, 500);
};

export default errorHandler;
