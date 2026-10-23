import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Brand from "./Brand.jsx";
import Icon from "../common/Icon.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { useNotify } from "../../context/NotificationContext.jsx";
import { whatsappLink } from "../../utils/whatsapp.js";

function Header() {
    const { isAuthenticated, logout } = useAuth();
    const notify = useNotify();
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname, location.hash]);

    const handleLogout = () => {
        logout();
        notify.success("Cerraste sesión.");
        navigate("/");
    };

    const close = () => setOpen(false);

    return (
        <header className="site-header">
            <a className="skip-link" href="#contenido">Saltar al contenido</a>
            <div className="container header-content">
                <Brand onNavigate={close} />

                <button
                    type="button"
                    className="menu-toggle"
                    aria-expanded={open}
                    aria-controls="menu-principal"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <Icon name={open ? "close" : "menu"} size={22} />
                    <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
                </button>

                <nav id="menu-principal" className={`nav ${open ? "is-open" : ""}`} aria-label="Navegación principal">
                    <ul className="nav-list">
                        <li><NavLink to="/" end>Inicio</NavLink></li>
                        <li><NavLink to="/servicios">Servicios</NavLink></li>
                        <li><Link to="/#cotizador">Cotizar</Link></li>
                        <li><Link to="/#trabajos">Trabajos</Link></li>
                        {isAuthenticated && <li><NavLink to="/admin">Panel</NavLink></li>}
                    </ul>
                    <div className="nav-actions">
                        {isAuthenticated ? (
                            <button type="button" className="btn btn-ghost btn-small" onClick={handleLogout}>
                                <Icon name="logout" size={18} />
                                Salir
                            </button>
                        ) : (
                            <NavLink to="/login" className="nav-staff">Staff</NavLink>
                        )}
                        <a className="btn btn-primary btn-small" href={whatsappLink()} target="_blank" rel="noreferrer">
                            Reservar turno
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
