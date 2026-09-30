import { NotFoundError } from "../exceptions/AppError.js";
import { Messages } from "../enums/Messages.js";

const notFound = (req, res, next) => {
    next(new NotFoundError(Messages.ROUTE_NOT_FOUND));
};

export default notFound;
