import { useEffect, useRef } from "react";
import Icon from "./Icon.jsx";

// Usa <dialog> nativo: atrapa el foco, cierra con Escape y bloquea el fondo.
function ConfirmDialog({ open, title, message, confirmLabel = "Eliminar", loading = false, onConfirm, onCancel }) {
    const ref = useRef(null);

    useEffect(() => {
        const dialog = ref.current;
        if (!dialog) return;
        if (open && !dialog.open) dialog.showModal();
        if (!open && dialog.open) dialog.close();
    }, [open]);

    return (
        <dialog
            ref={ref}
            className="dialog"
            aria-labelledby="dialog-title"
            aria-describedby="dialog-message"
            onCancel={(event) => {
                event.preventDefault();
                onCancel();
            }}
            onClick={(event) => {
                if (event.target === ref.current) onCancel();
            }}
        >
            <div className="dialog-body">
                <span className="dialog-icon"><Icon name="trash" size={22} /></span>
                <h2 id="dialog-title">{title}</h2>
                <p id="dialog-message">{message}</p>
                <div className="dialog-actions">
                    <button type="button" className="btn btn-ghost" onClick={onCancel} autoFocus>
                        Cancelar
                    </button>
                    <button type="button" className="btn btn-danger" onClick={onConfirm} disabled={loading}>
                        {loading ? "Eliminando..." : confirmLabel}
                    </button>
                </div>
            </div>
        </dialog>
    );
}

export default ConfirmDialog;
