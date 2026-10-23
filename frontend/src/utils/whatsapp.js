import { NEGOCIO } from "../data/negocio.js";

export function whatsappLink(mensaje = "Hola RS! Quiero consultar por un turno.") {
    return `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
