import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../common/Icon.jsx";
import { whatsappLink } from "../../utils/whatsapp.js";

const RUTAS_SIN_BARRA = ["/login", "/admin"];

// Barra fija inferior para celular: aparece cuando los botones del hero salen de pantalla
// y se esconde mientras se ve el cotizador.
function MobileActionBar() {
    const { pathname } = useLocation();
    const [visible, setVisible] = useState(false);
    const oculta = RUTAS_SIN_BARRA.includes(pathname);

    useEffect(() => {
        if (oculta) return undefined;
        const ctaPrincipal = document.querySelector("[data-cta-principal]");
        const cotizador = document.getElementById("cotizador");
        // Sin hero (ej: /servicios) la barra ya pasó el CTA principal.
        let pasoElHero = !ctaPrincipal;
        let cotizadorEnPantalla = false;
        const actualizar = () => setVisible(pasoElHero && !cotizadorEnPantalla);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.target === ctaPrincipal) {
                    pasoElHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
                } else {
                    // El cotizador ya tiene su propio botón de WhatsApp: no lo duplicamos.
                    cotizadorEnPantalla = entry.isIntersecting;
                }
            });
            actualizar();
        }, { threshold: 0.15 });

        if (ctaPrincipal) observer.observe(ctaPrincipal);
        if (cotizador) observer.observe(cotizador);
        actualizar();
        return () => observer.disconnect();
    }, [pathname, oculta]);

    if (oculta) return null;

    return (
        <div className={`mobile-bar ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
            <Link className="btn btn-ghost" to="/#cotizador" tabIndex={visible ? 0 : -1}>
                Cotizar
            </Link>
            <a
                className="btn btn-primary"
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                tabIndex={visible ? 0 : -1}
            >
                <Icon name="whatsapp" size={20} /> Reservar por WhatsApp
            </a>
        </div>
    );
}

export default MobileActionBar;
