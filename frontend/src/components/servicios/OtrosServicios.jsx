import { OTROS_SERVICIOS } from "../../data/negocio.js";

function OtrosServicios() {
    return (
        <div className="otros">
            <h3>También hacemos</h3>
            <ul className="tags">
                {OTROS_SERVICIOS.map((nombre) => <li key={nombre}>{nombre}</li>)}
            </ul>
            <p>Precio a consultar según el vehículo.</p>
        </div>
    );
}

export default OtrosServicios;
