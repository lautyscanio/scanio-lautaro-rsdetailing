import Icon from "../common/Icon.jsx";
import { NEGOCIO } from "../../data/negocio.js";
import { whatsappLink } from "../../utils/whatsapp.js";

function InfoStrip() {
    const [semana] = NEGOCIO.horarios;

    return (
        <section className="info-strip" aria-label="Datos del taller">
            <div className="container info-grid">
                <p>
                    <Icon name="clock" />
                    <span><strong>{semana.dias}</strong> {semana.horas}</span>
                </p>
                <a href={NEGOCIO.mapsUrl} target="_blank" rel="noreferrer">
                    <Icon name="pin" />
                    <span><strong>{NEGOCIO.direccion}</strong> {NEGOCIO.localidad}</span>
                </a>
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                    <Icon name="whatsapp" />
                    <span><strong>{NEGOCIO.telefonoVisible}</strong> WhatsApp</span>
                </a>
            </div>
        </section>
    );
}

export default InfoStrip;
