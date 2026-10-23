import LoadingSpinner from "../common/LoadingSpinner.jsx";
import StatusMessage from "../common/StatusMessage.jsx";
import ServicioItem from "./ServicioItem.jsx";

// Lista pública con sus estados: cargando, error (con reintento) y vacío.
function ServicioList({ servicios, loading, error, onRetry, onCotizar }) {
    if (loading) return <LoadingSpinner text="Cargando servicios..." />;

    if (error) {
        return (
            <StatusMessage
                type="error"
                title="No pudimos cargar los servicios"
                text={error}
                actionLabel="Reintentar"
                onAction={onRetry}
            />
        );
    }

    if (servicios.length === 0) {
        return (
            <StatusMessage
                title="Todavía no hay servicios publicados"
                text="Escribinos por WhatsApp y te pasamos los precios actualizados."
            />
        );
    }

    return (
        <ul className="servicios-list">
            {servicios.map((servicio) => (
                <ServicioItem key={servicio.id} servicio={servicio} onCotizar={onCotizar} />
            ))}
        </ul>
    );
}

export default ServicioList;
