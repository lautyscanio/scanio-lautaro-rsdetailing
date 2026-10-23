export function validateServicio(values) {
    const errors = {};

    if (!values.nombre.trim()) {
        errors.nombre = "El nombre es obligatorio.";
    }

    if (!values.descripcion.trim()) {
        errors.descripcion = "La descripción es obligatoria.";
    }

    const precio = Number(values.precioBase);
    if (!values.precioBase || !Number.isFinite(precio) || precio <= 0) {
        errors.precioBase = "Ingresá un precio mayor a 0.";
    }

    const duracion = Number(values.duracionMinutos);
    if (!values.duracionMinutos || !Number.isInteger(duracion) || duracion <= 0) {
        errors.duracionMinutos = "Ingresá una duración entera mayor a 0.";
    }

    const coef = Number(values.coeficienteCamioneta);
    if (!values.coeficienteCamioneta || !Number.isFinite(coef) || coef < 1) {
        errors.coeficienteCamioneta = "El coeficiente debe ser 1 o mayor.";
    }

    return errors;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLogin(values) {
    const errors = {};

    if (!values.email.trim()) {
        errors.email = "Ingresá tu email.";
    } else if (!EMAIL_REGEX.test(values.email.trim())) {
        errors.email = "El email no tiene un formato válido (ej: nombre@dominio.com).";
    }

    if (!values.password) {
        errors.password = "Ingresá tu contraseña.";
    }

    return errors;
}
