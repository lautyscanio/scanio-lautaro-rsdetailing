import Icon from "../common/Icon.jsx";
import { NEGOCIO } from "../../data/negocio.js";
import { whatsappLink } from "../../utils/whatsapp.js";

function CierreCta() {
    return (
        <section className="cierre" aria-labelledby="titulo-cierre">
            <div className="container cierre-inner">
                <h2 id="titulo-cierre">Traé tu auto a la luz.</h2>
                <p>Coordinamos el turno por WhatsApp. {NEGOCIO.horarios[0].dias}, {NEGOCIO.horarios[0].horas}.</p>
                <div className="hero-actions">
                    <a className="btn btn-primary btn-large" href={whatsappLink()} target="_blank" rel="noreferrer">
                        <Icon name="whatsapp" size={20} /> Hablar por WhatsApp
                    </a>
                    <a className="btn btn-ghost btn-large" href={NEGOCIO.mapsUrl} target="_blank" rel="noreferrer">
                        <Icon name="pin" size={20} /> Cómo llegar
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CierreCta;
