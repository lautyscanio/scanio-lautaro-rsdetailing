import { Link } from "react-router-dom";
import Brand from "./Brand.jsx";
import Icon from "../common/Icon.jsx";
import { NEGOCIO } from "../../data/negocio.js";
import { whatsappLink } from "../../utils/whatsapp.js";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <div className="footer-intro">
                    <Brand />
                    <p>
                        Centro de estética vehicular en Villa Pueyrredón. Protección de pintura,
                        limpieza profunda y corrección de laca bajo luz LED.
                    </p>
                </div>

                <div>
                    <h2>Visitanos</h2>
                    <address>
                        {NEGOCIO.direccion}, {NEGOCIO.codigoPostal}<br />
                        {NEGOCIO.localidad}
                    </address>
                    <a className="footer-link" href={NEGOCIO.mapsUrl} target="_blank" rel="noreferrer">
                        <Icon name="pin" size={18} /> Cómo llegar
                    </a>
                </div>

                <div>
                    <h2>Horarios</h2>
                    <dl className="footer-hours">
                        {NEGOCIO.horarios.map((h) => (
                            <div key={h.dias}>
                                <dt>{h.dias}</dt>
                                <dd>{h.horas}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div>
                    <h2>Contacto</h2>
                    <ul>
                        <li>
                            <a className="footer-link" href={whatsappLink()} target="_blank" rel="noreferrer">
                                <Icon name="whatsapp" size={18} /> {NEGOCIO.telefonoVisible}
                            </a>
                        </li>
                        <li>
                            <a className="footer-link" href={NEGOCIO.instagramUrl} target="_blank" rel="noreferrer">
                                <Icon name="instagram" size={18} /> @{NEGOCIO.instagram}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>© {new Date().getFullYear()} {NEGOCIO.nombre}</p>
                <nav aria-label="Navegación secundaria">
                    <Link to="/servicios">Servicios</Link>
                    <Link to="/login">Acceso staff</Link>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
