import { useEffect, useRef, useState } from "react";
import FormField from "../common/FormField.jsx";
import { validateServicio } from "../../utils/validators.js";
import { calcularPrecio } from "../../utils/cotizacion.js";
import { formatARS } from "../../utils/formatters.js";

const EMPTY_FORM = {
    nombre: "",
    descripcion: "",
    precioBase: "",
    duracionMinutos: "",
    coeficienteCamioneta: "1.3"
};

function toFormValues(servicio) {
    if (!servicio) return EMPTY_FORM;
    return {
        nombre: servicio.nombre ?? "",
        descripcion: servicio.descripcion ?? "",
        precioBase: String(servicio.precioBase ?? ""),
        duracionMinutos: String(servicio.duracionMinutos ?? ""),
        coeficienteCamioneta: String(servicio.coeficienteCamioneta ?? "1.3")
    };
}

function ServicioForm({ initialData, onSubmit, onCancel, isLoading }) {
    const [values, setValues] = useState(EMPTY_FORM);
    const [errors, setErrors] = useState({});
    const firstFieldRef = useRef(null);

    useEffect(() => {
        setValues(toFormValues(initialData));
        setErrors({});
        if (initialData) firstFieldRef.current?.focus();
    }, [initialData]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const nextErrors = validateServicio(values);
        setErrors(nextErrors);

        const firstInvalid = Object.keys(nextErrors)[0];
        if (firstInvalid) {
            document.getElementById(firstInvalid)?.focus();
            return;
        }

        const ok = await onSubmit({
            nombre: values.nombre.trim(),
            descripcion: values.descripcion.trim(),
            precioBase: Number(values.precioBase),
            duracionMinutos: Number(values.duracionMinutos),
            coeficienteCamioneta: Number(values.coeficienteCamioneta)
        });

        if (ok && !initialData) {
            setValues(EMPTY_FORM);
        }
    };

    const preview = {
        precioBase: Number(values.precioBase) || 0,
        coeficienteCamioneta: Number(values.coeficienteCamioneta) || 1
    };

    return (
        <form className="panel-form" onSubmit={handleSubmit} noValidate aria-labelledby="form-title">
            <h2 id="form-title">{initialData ? "Editar servicio" : "Nuevo servicio"}</h2>
            {initialData && <p className="form-context">Editando <strong>{initialData.nombre}</strong></p>}

            <FormField
                id="nombre"
                label="Nombre"
                value={values.nombre}
                onChange={handleChange}
                error={errors.nombre}
                ref={firstFieldRef}
                autoComplete="off"
                required
            />
            <FormField
                id="descripcion"
                label="Descripción"
                as="textarea"
                rows="3"
                value={values.descripcion}
                onChange={handleChange}
                error={errors.descripcion}
                hint="Se muestra en la web. Una o dos frases."
                required
            />
            <div className="field-row">
                <FormField
                    id="precioBase"
                    label="Precio base (ARS)"
                    type="number"
                    inputMode="numeric"
                    min="1"
                    value={values.precioBase}
                    onChange={handleChange}
                    error={errors.precioBase}
                    required
                />
                <FormField
                    id="duracionMinutos"
                    label="Duración (min)"
                    type="number"
                    inputMode="numeric"
                    min="1"
                    value={values.duracionMinutos}
                    onChange={handleChange}
                    error={errors.duracionMinutos}
                    required
                />
            </div>
            <FormField
                id="coeficienteCamioneta"
                label="Coeficiente camioneta"
                type="number"
                inputMode="decimal"
                min="1"
                step="0.1"
                value={values.coeficienteCamioneta}
                onChange={handleChange}
                error={errors.coeficienteCamioneta}
                hint={preview.precioBase > 0
                    ? `Con este valor, una camioneta pagaría ${formatARS(calcularPrecio(preview, "camioneta"))}.`
                    : "1 = mismo precio que un auto. 1,3 = 30% más."}
                required
            />

            <div className="form-actions">
                {initialData && (
                    <button type="button" className="btn btn-ghost" onClick={onCancel}>Cancelar</button>
                )}
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? "Guardando..." : initialData ? "Guardar cambios" : "Crear servicio"}
                </button>
            </div>
        </form>
    );
}

export default ServicioForm;
