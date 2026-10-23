// Regla de negocio: el precio base se multiplica por el coeficiente
// según la categoría del vehículo (un auto paga el precio base).
export const CATEGORIAS = [
    { value: "auto", label: "Auto", detalle: "Sedán, hatch o coupé" },
    { value: "camioneta", label: "Camioneta", detalle: "SUV, pick-up o utilitario" }
];

export function calcularPrecio(servicio, categoria) {
    if (!servicio) return 0;
    const coeficiente = categoria === "camioneta" ? Number(servicio.coeficienteCamioneta) : 1;
    return Math.round(Number(servicio.precioBase) * coeficiente);
}
