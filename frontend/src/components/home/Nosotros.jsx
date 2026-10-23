import tallerImg from "../../assets/taller.png";
import { DIFERENCIALES } from "../../data/negocio.js";

function Nosotros() {
    return (
        <section className="section nosotros" aria-labelledby="titulo-nosotros">
            <div className="container nosotros-grid">
                <figure className="nosotros-photo">
                    <img
                        src={tallerImg}
                        alt="Interior de la cabina de RS vacía: techo con marcos hexagonales de tubos LED, paredes negras y piso de baldosas azules y grises"
                        width="680"
                        height="510"
                        loading="lazy"
                    />
                </figure>
                <div className="nosotros-copy">
                    <h2 id="titulo-nosotros">Un laboratorio para tu auto</h2>
                    <p>
                        En RS combinamos técnica y paciencia. La cabina, con paredes negras y tubos LED
                        blancos, nos deja ver y corregir lo que a simple vista pasa desapercibido.
                    </p>
                    <dl className="diferenciales">
                        {DIFERENCIALES.map((item) => (
                            <div key={item.titulo}>
                                <dt>{item.titulo}</dt>
                                <dd>{item.texto}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}

export default Nosotros;
