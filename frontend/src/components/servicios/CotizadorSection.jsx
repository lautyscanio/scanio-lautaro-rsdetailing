import Cotizador from "./Cotizador.jsx";

// Bloque azul con el cotizador. Se reutiliza en la landing y en /servicios.
function CotizadorSection({ catalogo, servicioId, onServicioChange }) {
    return (
        <section id="cotizador" className="cotizador-section" aria-labelledby="titulo-cotizador">
            <div className="container cotizador-grid">
                <div className="cotizador-copy">
                    <h2 id="titulo-cotizador">Cotizá en segundos.</h2>
                    <p>
                        Elegí el servicio y el tamaño de tu vehículo: las camionetas llevan más superficie
                        y más horas, por eso tienen un coeficiente propio.
                    </p>
                </div>
                <Cotizador
                    servicios={catalogo.servicios}
                    loading={catalogo.loading}
                    error={catalogo.error}
                    onRetry={catalogo.reload}
                    servicioId={servicioId}
                    onServicioChange={onServicioChange}
                />
            </div>
        </section>
    );
}

export default CotizadorSection;
