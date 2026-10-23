export function formatARS(value) {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    }).format(value);
}

export function formatDuracion(minutos) {
    const horas = Math.floor(minutos / 60);
    const resto = minutos % 60;

    if (horas === 0) return `${resto} min`;
    if (resto === 0) return `${horas} h`;
    return `${horas} h ${resto} min`;
}

export function formatCoeficiente(valor) {
    return `x${Number(valor).toLocaleString("es-AR", { maximumFractionDigits: 2 })}`;
}
