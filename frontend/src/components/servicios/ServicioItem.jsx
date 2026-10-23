import Icon from "../common/Icon.jsx";
import { calcularPrecio } from "../../utils/cotizacion.js";
import { formatARS, formatDuracion } from "../../utils/formatters.js";

// Fila pública de un servicio. Se usa en la landing y en la página de servicios.
function ServicioItem({ servicio, onCotizar }) {
    return (
        <li className="servicio">
            <div className="servicio-main">
                <h3>{servicio.nombre}</h3>
                <p>{servicio.descripcion}</p>
            </div>
            <dl className="servicio-data">
                <div>
                    <dt>Auto</dt>
                    <dd>{formatARS(calcularPrecio(servicio, "auto"))}</dd>
                </div>
                <div>
                    <dt>Camioneta</dt>
                    <dd>{formatARS(calcularPrecio(servicio, "camioneta"))}</dd>
                </div>
                <div>
                    <dt>Tiempo</dt>
                    <dd>{formatDuracion(servicio.duracionMinutos)}</dd>
                </div>
            </dl>
            {onCotizar && (
                <button
                    type="button"
                    className="btn btn-ghost btn-small servicio-cta"
                    onClick={() => onCotizar(servicio.id)}
                    aria-label={`Cotizar ${servicio.nombre}`}
                >
                    Cotizar <Icon name="arrow" size={16} />
                </button>
            )}
        </li>
    );
}

export default ServicioItem;
