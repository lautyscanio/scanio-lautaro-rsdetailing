import SectionHeading from "../common/SectionHeading.jsx";
import { PASOS } from "../../data/negocio.js";

function Pasos() {
    return (
        <section className="section pasos" aria-labelledby="titulo-pasos">
            <div className="container">
                <SectionHeading id="titulo-pasos" title="Cómo reservar" />
                <ol className="pasos-list">
                    {PASOS.map((paso, i) => (
                        <li key={paso.titulo}>
                            <span className="paso-numero" aria-hidden="true">{i + 1}</span>
                            <h3>{paso.titulo}</h3>
                            <p>{paso.texto}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export default Pasos;
