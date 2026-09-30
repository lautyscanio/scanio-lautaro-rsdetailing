import servicioService from "../services/ServicioService.js";
import { sendSuccess } from "../responses/ApiResponse.js";

class ServicioController {
    getAll = (req, res, next) => {
        try {
            sendSuccess(res, servicioService.getAll());
        } catch (error) {
            next(error);
        }
    };

    getById = (req, res, next) => {
        try {
            sendSuccess(res, servicioService.getById(req.params.id));
        } catch (error) {
            next(error);
        }
    };

    create = (req, res, next) => {
        try {
            sendSuccess(res, servicioService.create(req.body), 201);
        } catch (error) {
            next(error);
        }
    };

    update = (req, res, next) => {
        try {
            sendSuccess(res, servicioService.update(req.params.id, req.body));
        } catch (error) {
            next(error);
        }
    };

    delete = (req, res, next) => {
        try {
            sendSuccess(res, servicioService.delete(req.params.id));
        } catch (error) {
            next(error);
        }
    };
}

export default new ServicioController();
