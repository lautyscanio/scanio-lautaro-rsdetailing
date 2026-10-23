import { forwardRef } from "react";

// Campo de formulario reutilizable: asocia label, input, ayuda y error.
const FormField = forwardRef(function FormField(
    { id, label, error, hint, as = "input", children, ...inputProps },
    ref
) {
    const Control = as;
    const describedBy = [hint && !error && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;

    return (
        <div className={`field ${error ? "field-invalid" : ""}`}>
            <label htmlFor={id}>{label}</label>
            <div className="field-control">
                <Control
                    ref={ref}
                    id={id}
                    name={id}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={describedBy}
                    {...inputProps}
                />
                {children}
            </div>
            {hint && !error && <small id={`${id}-hint`} className="field-hint">{hint}</small>}
            {error && <small id={`${id}-error`} className="field-error">{error}</small>}
        </div>
    );
});

export default FormField;
