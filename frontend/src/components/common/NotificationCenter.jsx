import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";

const DURACION = { success: 4000, error: 6500 };

function Toast({ item, onDismiss }) {
    const [paused, setPaused] = useState(false);
    const remaining = useRef(DURACION[item.type]);
    const startedAt = useRef(0);

    useEffect(() => {
        if (paused) return undefined;
        startedAt.current = Date.now();
        const timer = setTimeout(() => onDismiss(item.id), remaining.current);
        return () => {
            clearTimeout(timer);
            remaining.current -= Date.now() - startedAt.current;
        };
    }, [paused, item.id, onDismiss]);

    return (
        <li
            className={`toast toast-${item.type}`}
            role={item.type === "error" ? "alert" : "status"}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <span className="toast-icon">
                <Icon name={item.type === "error" ? "alert" : "check"} size={18} />
            </span>
            <p>{item.message}</p>
            <button
                type="button"
                className="toast-close"
                onClick={() => onDismiss(item.id)}
                aria-label="Cerrar notificación"
            >
                <Icon name="close" size={16} />
            </button>
        </li>
    );
}

function NotificationCenter({ notifications, onDismiss }) {
    return (
        <section className="notifications" aria-label="Notificaciones">
            <ol>
                {notifications.map((item) => (
                    <Toast key={item.id} item={item} onDismiss={onDismiss} />
                ))}
            </ol>
        </section>
    );
}

export default NotificationCenter;
