import { useCallback, useState } from "react";

// Guarda el servicio elegido en el cotizador y permite saltar a él desde una fila.
export function useCotizarServicio() {
    const [servicioId, setServicioId] = useState(null);

    const cotizar = useCallback((id) => {
        setServicioId(id);
        const seccion = document.getElementById("cotizador");
        seccion?.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => seccion?.querySelector("select")?.focus({ preventScroll: true }), 400);
    }, []);

    return { servicioId, setServicioId, cotizar };
}
