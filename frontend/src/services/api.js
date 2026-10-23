// Punto único de comunicación con el backend.
// Todas las peticiones pasan por acá: arma la URL, agrega headers,
// detecta respuestas incorrectas y lanza errores con un mensaje claro.
export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000/api";

export async function request(path, { method = "GET", body, token } = {}) {
    const headers = {};

    if (body) {
        headers["Content-Type"] = "application/json";
    }
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    let response;
    try {
        response = await fetch(`${API_URL}${path}`, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined
        });
    } catch {
        throw new Error("No pudimos conectar con el servidor. Revisá que el backend esté encendido.");
    }

    const result = await response.json().catch(() => null);

    if (!response.ok) {
        const error = new Error(result?.message || "Ocurrió un error inesperado. Probá de nuevo.");
        error.status = response.status;
        throw error;
    }

    return result?.data;
}
