import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../exceptions/AppError.js";
import { Messages } from "../enums/Messages.js";
import config from "../utils/config.js";

const requireAuth = (req, res, next) => {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
        return next(new UnauthorizedError(Messages.UNAUTHORIZED));
    }

    const token = header.slice(7);

    try {
        const payload = jwt.verify(token, config.jwtSecret);
        req.user = payload;
        return next();
    } catch {
        return next(new UnauthorizedError(Messages.INVALID_TOKEN));
    }
};

export default requireAuth;