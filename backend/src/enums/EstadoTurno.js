export const EstadoTurno = Object.freeze({
    PENDIENTE: "pendiente",
    CONFIRMADO: "confirmado",
    EN_PROCESO: "en proceso",
    FINALIZADO: "finalizado",
    CANCELADO: "cancelado"
});

export const TRANSICIONES = Object.freeze({
    [EstadoTurno.PENDIENTE]: [EstadoTurno.CONFIRMADO, EstadoTurno.CANCELADO],
    [EstadoTurno.CONFIRMADO]: [EstadoTurno.EN_PROCESO, EstadoTurno.CANCELADO],
    [EstadoTurno.EN_PROCESO]: [EstadoTurno.FINALIZADO],
    [EstadoTurno.FINALIZADO]: [],
    [EstadoTurno.CANCELADO]: []
});

export const ESTADOS_ACTIVOS = Object.freeze([
    EstadoTurno.PENDIENTE,
    EstadoTurno.CONFIRMADO,
    EstadoTurno.EN_PROCESO
]);
