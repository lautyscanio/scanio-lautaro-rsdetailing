function LoadingSpinner({ text = "Cargando..." }) {
    return (
        <div className="loading" role="status" aria-live="polite">
            <span className="spinner" aria-hidden="true" />
            <span>{text}</span>
        </div>
    );
}

export default LoadingSpinner;
