import { Link } from "react-router-dom";
import SectionHeading from "../components/common/SectionHeading.jsx";
import ServicioList from "../components/servicios/ServicioList.jsx";
import OtrosServicios from "../components/servicios/OtrosServicios.jsx";
import CotizadorSection from "../components/servicios/CotizadorSection.jsx";
import { useServicios } from "../hooks/useServicios.js";
import { useCotizarServicio } from "../hooks/useCotizarServicio.js";
import { useAuth } from "../context/AuthContext.jsx";

function ServiciosPage() {
    const catalogo = useServicios();
    const { servicioId, setServicioId, cotizar } = useCotizarServicio();
    const { isAuthenticated } = useAuth();

    return (
        <>
            <section className="page-intro" aria-labelledby="titulo-pagina">
                <div className="container">
                    <SectionHeading id="titulo-pagina" as="h1" title="Servicios y precios">
                        Cada precio es para un auto. Las camionetas suman un coeficiente por tamaño;
                        abajo podés ver el valor exacto o cotizar el tuyo.
                    </SectionHeading>
                    {isAuthenticated && (
                        <Link className="text-link" to="/admin">Editar el catálogo desde el panel</Link>
                    )}
                </div>
            </section>

            <section className="section section-tight" aria-label="Catálogo">
                <div className="container">
                    <ServicioList
                        servicios={catalogo.servicios}
                        loading={catalogo.loading}
                        error={catalogo.error}
                        onRetry={catalogo.reload}
                        onCotizar={cotizar}
                    />
                    <OtrosServicios />
                </div>
            </section>

            <CotizadorSection catalogo={catalogo} servicioId={servicioId} onServicioChange={setServicioId} />
        </>
    );
}

export default ServiciosPage;
