import { useCallback, useEffect, useState } from "react";
import { getServicios } from "../services/servicioService.js";

// Carga el catálogo desde la API y expone los estados de carga y error.
export function useServicios() {
    const [servicios, setServicios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const reload = useCallback(async () => {
        setLoading(true);
        setError("");
        try {
            setServicios(await getServicios());
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        reload();
    }, [reload]);

    return { servicios, setServicios, loading, error, reload };
}
