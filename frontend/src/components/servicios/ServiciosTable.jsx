import Icon from "../common/Icon.jsx";
import { calcularPrecio } from "../../utils/cotizacion.js";
import { formatARS, formatCoeficiente, formatDuracion } from "../../utils/formatters.js";

// Tabla de gestión del panel: muestra el catálogo y las acciones por fila.
function ServiciosTable({ servicios, editingId, onEdit, onDelete }) {
    return (
        <div className="table-wrap">
            <table className="table">
                <caption className="sr-only">Servicios del catálogo</caption>
                <thead>
                    <tr>
                        <th scope="col">Servicio</th>
                        <th scope="col" className="num">Auto</th>
                        <th scope="col" className="num">Camioneta</th>
                        <th scope="col" className="num">Tiempo</th>
                        <th scope="col"><span className="sr-only">Acciones</span></th>
                    </tr>
                </thead>
                <tbody>
                    {servicios.map((servicio) => (
                        <tr key={servicio.id} className={editingId === servicio.id ? "is-editing" : ""}>
                            <th scope="row">
                                <span className="table-name">{servicio.nombre}</span>
                                <span className="table-desc">{servicio.descripcion}</span>
                            </th>
                            <td className="num" data-label="Auto">{formatARS(servicio.precioBase)}</td>
                            <td className="num" data-label="Camioneta">
                                {formatARS(calcularPrecio(servicio, "camioneta"))}
                                <span className="table-coef">{formatCoeficiente(servicio.coeficienteCamioneta)}</span>
                            </td>
                            <td className="num" data-label="Tiempo">{formatDuracion(servicio.duracionMinutos)}</td>
                            <td className="table-actions">
                                <button
                                    type="button"
                                    className="icon-btn"
                                    onClick={() => onEdit(servicio)}
                                    aria-label={`Editar ${servicio.nombre}`}
                                    title="Editar"
                                >
                                    <Icon name="edit" size={18} />
                                </button>
                                <button
                                    type="button"
                                    className="icon-btn icon-btn-danger"
                                    onClick={() => onDelete(servicio)}
                                    aria-label={`Eliminar ${servicio.nombre}`}
                                    title="Eliminar"
                                >
                                    <Icon name="trash" size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ServiciosTable;
