import { Link } from "react-router-dom";

function Brand({ onNavigate }) {
    return (
        <Link to="/" className="brand" aria-label="RS Car Detailing, ir al inicio" onClick={onNavigate}>
            <span className="brand-mark" aria-hidden="true">
                <span className="brand-r">R</span><span className="brand-s">S</span>
            </span>
            <span className="brand-name" aria-hidden="true">car detailing</span>
        </Link>
    );
}

export default Brand;
