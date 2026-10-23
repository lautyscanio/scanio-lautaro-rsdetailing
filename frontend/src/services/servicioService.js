import { request } from "./api.js";

export function getServicios() {
    return request("/servicios");
}

export function getServicioById(id) {
    return request(`/servicios/${id}`);
}

export function createServicio(servicio, token) {
    return request("/servicios", { method: "POST", body: servicio, token });
}

export function updateServicio(id, servicio, token) {
    return request(`/servicios/${id}`, { method: "PUT", body: servicio, token });
}

export function deleteServicio(id, token) {
    return request(`/servicios/${id}`, { method: "DELETE", token });
}
