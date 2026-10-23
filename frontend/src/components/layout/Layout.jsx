import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import MobileActionBar from "./MobileActionBar.jsx";

// Al cambiar de ruta vuelve arriba; si la URL trae #ancla, baja hasta esa sección.
function useScrollOnNavigate() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
            return undefined;
        }
        const irAlAncla = (behavior) => {
            document.getElementById(hash.slice(1))?.scrollIntoView({ behavior, block: "start" });
        };
        const timer = setTimeout(() => irAlAncla("smooth"), 60);

        // Si el contenido de arriba termina de cargar (ej: la lista de servicios),
        // la sección se corre: volvemos a ubicarla mientras la página se acomoda.
        const observer = new ResizeObserver(() => irAlAncla("auto"));
        observer.observe(document.body);
        const stop = setTimeout(() => observer.disconnect(), 1500);
        const cancelar = () => observer.disconnect();
        window.addEventListener("wheel", cancelar, { once: true, passive: true });
        window.addEventListener("touchstart", cancelar, { once: true, passive: true });

        return () => {
            clearTimeout(timer);
            clearTimeout(stop);
            observer.disconnect();
            window.removeEventListener("wheel", cancelar);
            window.removeEventListener("touchstart", cancelar);
        };
    }, [pathname, hash]);
}

function Layout({ children }) {
    useScrollOnNavigate();

    return (
        <div className="app-shell">
            <Header />
            <main id="contenido" tabIndex="-1">
                {children}
            </main>
            <Footer />
            <MobileActionBar />
        </div>
    );
}

export default Layout;
