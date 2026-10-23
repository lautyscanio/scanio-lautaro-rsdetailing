import Icon from "../common/Icon.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import { GALERIA, NEGOCIO } from "../../data/negocio.js";

function Galeria() {
    return (
        <section id="trabajos" className="section galeria" aria-labelledby="titulo-trabajos">
            <div className="container">
                <div className="galeria-head">
                    <SectionHeading id="titulo-trabajos" title="Trabajos recientes">
                        Fotos reales del taller, tal como las publicamos en Instagram.
                    </SectionHeading>
                    <a className="btn btn-ghost" href={NEGOCIO.instagramUrl} target="_blank" rel="noreferrer">
                        <Icon name="instagram" size={18} /> @{NEGOCIO.instagram}
                    </a>
                </div>
                <ul className="galeria-grid">
                    {GALERIA.map((foto) => (
                        <li key={foto.titulo} className={`galeria-item galeria-${foto.formato}`}>
                            <figure>
                                <img src={foto.src} alt={foto.alt} loading="lazy" />
                                <figcaption>{foto.titulo}</figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Galeria;
