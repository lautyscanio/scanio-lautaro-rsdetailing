import { Link } from "react-router-dom";
import Hero from "../components/home/Hero.jsx";
import InfoStrip from "../components/home/InfoStrip.jsx";
import Nosotros from "../components/home/Nosotros.jsx";
import Galeria from "../components/home/Galeria.jsx";
import Pasos from "../components/home/Pasos.jsx";
import CierreCta from "../components/home/CierreCta.jsx";
import SectionHeading from "../components/common/SectionHeading.jsx";
import Icon from "../components/common/Icon.jsx";
import ServicioList from "../components/servicios/ServicioList.jsx";
import OtrosServicios from "../components/servicios/OtrosServicios.jsx";
import CotizadorSection from "../components/servicios/CotizadorSection.jsx";
import { useServicios } from "../hooks/useServicios.js";
import { useCotizarServicio } from "../hooks/useCotizarServicio.js";

function HomePage() {
    const catalogo = useServicios();
    const { servicioId, setServicioId, cotizar } = useCotizarServicio();

    return (
        <>
            <Hero />
            <InfoStrip />
            <Nosotros />

            <section id="servicios" className="section" aria-labelledby="titulo-servicios">
                <div className="container servicios-layout">
                    <div>
                        <SectionHeading id="titulo-servicios" title="Servicios">
                            Precios de referencia actualizados desde el sistema del taller.
                        </SectionHeading>
                        <Link className="text-link" to="/servicios">
                            Ver página de servicios <Icon name="arrow" size={16} />
                        </Link>
                    </div>
                    <div>
                        <ServicioList
                            servicios={catalogo.servicios}
                            loading={catalogo.loading}
                            error={catalogo.error}
                            onRetry={catalogo.reload}
                            onCotizar={cotizar}
                        />
                        <OtrosServicios />
                    </div>
                </div>
            </section>

            <CotizadorSection catalogo={catalogo} servicioId={servicioId} onServicioChange={setServicioId} />
            <Galeria />
            <Pasos />
            <CierreCta />
        </>
    );
}

export default HomePage;
