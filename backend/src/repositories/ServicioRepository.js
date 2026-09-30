import Servicio from "../models/Servicio.js";

// Persistencia temporal: los datos viven en memoria mientras el servidor esté levantado.
const servicios = [
    new Servicio(1, "Tratamiento cerámico", "Protección cerámica de la pintura con acabado de alto brillo.", 350000, 480, 1.3),
    new Servicio(2, "Limpieza de interiores", "Limpieza profunda de tapizados, plásticos y alfombras.", 60000, 180, 1.3),
    new Servicio(3, "Pulido y corrección de laca", "Eliminación de rayas y defectos superficiales de la pintura.", 120000, 300, 1.3)
];

let nextId = servicios.length + 1;

class ServicioRepository {
    findAll() {
        return servicios;
    }

    findById(id) {
        return servicios.find((servicio) => servicio.id === id);
    }

    findByNombre(nombre) {
        return servicios.find(
            (servicio) => servicio.nombre.toLowerCase() === nombre.toLowerCase()
        );
    }

    create(data) {
        const servicio = new Servicio(
            nextId++,
            data.nombre,
            data.descripcion,
            data.precioBase,
            data.duracionMinutos,
            data.coeficienteCamioneta
        );
        servicios.push(servicio);
        return servicio;
    }

    update(id, data) {
        const servicio = this.findById(id);
        if (!servicio) return undefined;

        servicio.nombre = data.nombre;
        servicio.descripcion = data.descripcion;
        servicio.precioBase = data.precioBase;
        servicio.duracionMinutos = data.duracionMinutos;
        servicio.coeficienteCamioneta = data.coeficienteCamioneta;
        return servicio;
    }

    delete(id) {
        const index = servicios.findIndex((servicio) => servicio.id === id);
        if (index === -1) return undefined;

        return servicios.splice(index, 1)[0];
    }
}

export default new ServicioRepository();
