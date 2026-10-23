import Icon from "./Icon.jsx";

// Mensaje para estados vacíos o de error, con una acción opcional.
function StatusMessage({ type = "empty", title, text, actionLabel, onAction }) {
    return (
        <div className={`status status-${type}`} role={type === "error" ? "alert" : undefined}>
            {type === "error" && <Icon name="alert" size={22} />}
            <div>
                <p className="status-title">{title}</p>
                {text && <p className="status-text">{text}</p>}
            </div>
            {actionLabel && (
                <button type="button" className="btn btn-ghost btn-small" onClick={onAction}>
                    {actionLabel}
                </button>
            )}
        </div>
    );
}

export default StatusMessage;
