import servicioRepository from "../repositories/ServicioRepository.js";
import { Messages } from "../enums/Messages.js";
import { BadRequestError, NotFoundError, ConflictError } from "../exceptions/AppError.js";
import {
    isNonEmptyString,
    isPositiveNumber,
    isPositiveInteger,
    parseId
} from "../utils/validators.js";

class ServicioService {
    getAll() {
        return servicioRepository.findAll();
    }

    getById(rawId) {
        const id = this.#validateId(rawId);
        const servicio = servicioRepository.findById(id);

        if (!servicio) {
            throw new NotFoundError(Messages.SERVICIO_NOT_FOUND);
        }
        return servicio;
    }

    create(body) {
        const data = this.#validateBody(body);

        if (servicioRepository.findByNombre(data.nombre)) {
            throw new ConflictError(Messages.DUPLICATED_RESOURCE);
        }
        return servicioRepository.create(data);
    }

    update(rawId, body) {
        const id = this.#validateId(rawId);
        const data = this.#validateBody(body);

        if (!servicioRepository.findById(id)) {
            throw new NotFoundError(Messages.SERVICIO_NOT_FOUND);
        }

        // Puede coincidir el nombre con el del propio servicio, pero no con otro.
        const repetido = servicioRepository.findByNombre(data.nombre);
        if (repetido && repetido.id !== id) {
            throw new ConflictError(Messages.DUPLICATED_RESOURCE);
        }
        return servicioRepository.update(id, data);
    }

    delete(rawId) {
        const id = this.#validateId(rawId);
        const eliminado = servicioRepository.delete(id);

        if (!eliminado) {
            throw new NotFoundError(Messages.SERVICIO_NOT_FOUND);
        }
        return eliminado;
    }

    #validateId(rawId) {
        const id = parseId(rawId);
        if (id === null) {
            throw new BadRequestError(Messages.INVALID_ID);
        }
        return id;
    }

    #validateBody(body) {
        const { nombre, descripcion, precioBase, duracionMinutos, coeficienteCamioneta } = body ?? {};

        const valido =
            isNonEmptyString(nombre) &&
            isNonEmptyString(descripcion) &&
            isPositiveNumber(precioBase) &&
            isPositiveInteger(duracionMinutos) &&
            typeof coeficienteCamioneta === "number" &&
            coeficienteCamioneta >= 1;

        if (!valido) {
            throw new BadRequestError(Messages.INVALID_DATA);
        }

        return {
            nombre: nombre.trim(),
            descripcion: descripcion.trim(),
            precioBase,
            duracionMinutos,
            coeficienteCamioneta
        };
    }
}

export default new ServicioService();
