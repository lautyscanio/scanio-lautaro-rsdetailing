import { Link } from "react-router-dom";
import LedCeiling from "./LedCeiling.jsx";
import Icon from "../common/Icon.jsx";
import { HERO_FONDO, NEGOCIO } from "../../data/negocio.js";
import { whatsappLink } from "../../utils/whatsapp.js";

function Hero() {
    return (
        <section className="hero" aria-labelledby="hero-title">
            {/* Foto de fondo decorativa: alt vacío para que los lectores de pantalla la salteen */}
            <div className="hero-fondo" aria-hidden="true">
                <img src={HERO_FONDO} alt="" width="640" height="640" fetchpriority="high" />
            </div>
            <LedCeiling />
            <div className="container hero-grid">
                <div className="hero-copy">
                    <h1 id="hero-title">
                        Máxima calidad<br />en cada detalle.
                    </h1>
                    <p className="hero-text">
                        Protección cerámica, PPF, limpieza profunda de interiores y corrección de pintura
                        en una cabina iluminada para no dejar pasar ni una micro-raya.
                    </p>
                    <div className="hero-actions" data-cta-principal>
                        <Link className="btn btn-primary btn-large" to="/#cotizador">
                            Cotizá tu servicio <Icon name="arrow" size={20} />
                        </Link>
                        <a className="btn btn-ghost btn-large" href={whatsappLink()} target="_blank" rel="noreferrer">
                            <Icon name="whatsapp" size={20} /> Escribinos
                        </a>
                    </div>
                    <p className="hero-ubicacion">
                        <Icon name="pin" size={16} /> {NEGOCIO.direccion} · {NEGOCIO.localidad}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
