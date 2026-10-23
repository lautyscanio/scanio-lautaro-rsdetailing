import { Router } from "express";
import jwt from "jsonwebtoken";
import config from "../utils/config.js";
import { BadRequestError, UnauthorizedError } from "../exceptions/AppError.js";
import { sendSuccess } from "../responses/ApiResponse.js";
import { Messages } from "../enums/Messages.js";

const router = Router();

const USERS = [
    { id: 1, email: "admin@rsdetailing.com", password: "admin1234", rol: "administrador", nombre: "Admin" },
    { id: 2, email: "empleado@rsdetailing.com", password: "empleado1234", rol: "empleado", nombre: "Empleado" }
];

router.post("/login", (req, res, next) => {
    try {
        const { email, password } = req.body ?? {};

        if (!email || !password) {
            throw new BadRequestError(Messages.INVALID_DATA);
        }

        const user = USERS.find((u) => u.email === email && u.password === password);
        if (!user) {
            throw new UnauthorizedError(Messages.INVALID_CREDENTIALS);
        }

        const token = jwt.sign(
            {
                sub: user.id,
                email: user.email,
                rol: user.rol,
                nombre: user.nombre
            },
            config.jwtSecret,
            { expiresIn: "8h" }
        );

        sendSuccess(res, {
            token,
            user: {
                id: user.id,
                email: user.email,
                rol: user.rol,
                nombre: user.nombre
            }
        });
    } catch (error) {
        next(error);
    }
});

export default router;