import { createContext, useCallback, useContext, useMemo, useState } from "react";
import NotificationCenter from "../components/common/NotificationCenter.jsx";

const NotificationContext = createContext(null);

// Sistema único de notificaciones: éxitos y errores salen por el mismo canal.
export function NotificationProvider({ children }) {
    const [notifications, setNotifications] = useState([]);

    const dismiss = useCallback((id) => {
        setNotifications((prev) => prev.filter((item) => item.id !== id));
    }, []);

    const push = useCallback((type, message) => {
        const id = crypto.randomUUID();
        setNotifications((prev) => [...prev, { id, type, message }].slice(-4));
    }, []);

    const notify = useMemo(() => ({
        success: (message) => push("success", message),
        error: (message) => push("error", message)
    }), [push]);

    return (
        <NotificationContext.Provider value={notify}>
            {children}
            <NotificationCenter notifications={notifications} onDismiss={dismiss} />
        </NotificationContext.Provider>
    );
}

export function useNotify() {
    return useContext(NotificationContext);
}
