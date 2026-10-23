import { useEffect, useId, useState } from "react";
import Icon from "../common/Icon.jsx";
import LoadingSpinner from "../common/LoadingSpinner.jsx";
import StatusMessage from "../common/StatusMessage.jsx";
import { CATEGORIAS, calcularPrecio } from "../../utils/cotizacion.js";
import { formatARS, formatCoeficiente, formatDuracion } from "../../utils/formatters.js";
import { whatsappLink } from "../../utils/whatsapp.js";

// Cotizador: precio base x coeficiente según el tipo de vehículo.
function Cotizador({ servicios, loading, error, onRetry, servicioId, onServicioChange }) {
    const uid = useId();
    const [categoria, setCategoria] = useState("auto");

    const seleccionado = servicios.find((s) => s.id === servicioId) ?? servicios[0];

    useEffect(() => {
        if (!servicioId && servicios[0]) onServicioChange(servicios[0].id);
    }, [servicioId, servicios, onServicioChange]);

    if (loading) return <LoadingSpinner text="Preparando el cotizador..." />;
    if (error) {
        return (
            <StatusMessage
                type="error"
                title="El cotizador no está disponible"
                text={error}
                actionLabel="Reintentar"
                onAction={onRetry}
            />
        );
    }
    if (!seleccionado) {
        return <StatusMessage title="No hay servicios para cotizar todavía" />;
    }

    const precio = calcularPrecio(seleccionado, categoria);
    const categoriaLabel = CATEGORIAS.find((c) => c.value === categoria).label.toLowerCase();
    const mensaje = `Hola RS! Quiero reservar "${seleccionado.nombre}" para mi ${categoriaLabel}. Cotización web: ${formatARS(precio)}.`;

    return (
        <form className="cotizador" onSubmit={(event) => event.preventDefault()} aria-label="Cotizador de servicios">
            <fieldset className="cotizador-vehiculo">
                <legend>¿Qué vehículo traés?</legend>
                <div className="segmented">
                    {CATEGORIAS.map((cat) => (
                        <label key={cat.value} className="segment">
                            <input
                                type="radio"
                                name={`${uid}-categoria`}
                                value={cat.value}
                                checked={categoria === cat.value}
                                onChange={() => setCategoria(cat.value)}
                            />
                            <span className="segment-box">
                                <Icon name={cat.value} size={34} />
                                <span className="segment-label">{cat.label}</span>
                                <span className="segment-detail">{cat.detalle}</span>
                            </span>
                        </label>
                    ))}
                </div>
            </fieldset>

            <div className="field">
                <label htmlFor={`${uid}-servicio`}>Servicio</label>
                <div className="field-control select-control">
                    <select
                        id={`${uid}-servicio`}
                        value={seleccionado.id}
                        onChange={(event) => onServicioChange(Number(event.target.value))}
                    >
                        {servicios.map((s) => (
                            <option key={s.id} value={s.id}>{s.nombre}</option>
                        ))}
                    </select>
                </div>
            </div>

            <output className="cotizador-resultado" htmlFor={`${uid}-servicio`} aria-live="polite">
                <span className="resultado-label">Precio estimado</span>
                <span className="resultado-precio" key={`${seleccionado.id}-${categoria}`}>{formatARS(precio)}</span>
                <span className="resultado-meta">
                    <Icon name="clock" size={16} /> {formatDuracion(seleccionado.duracionMinutos)} de trabajo
                    {categoria === "camioneta" && <> · coeficiente {formatCoeficiente(seleccionado.coeficienteCamioneta)}</>}
                </span>
            </output>

            <a className="btn btn-primary btn-large" href={whatsappLink(mensaje)} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={20} />
                Reservar por WhatsApp
            </a>
            <p className="cotizador-nota">El precio final se confirma al ver el vehículo en el taller.</p>
        </form>
    );
}

export default Cotizador;
