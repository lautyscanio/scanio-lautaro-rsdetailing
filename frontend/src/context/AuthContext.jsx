import { createContext, useContext, useMemo, useState } from "react";

const TOKEN_KEY = "rs_token";
const AuthContext = createContext(null);

function readToken() {
    try {
        return localStorage.getItem(TOKEN_KEY) || "";
    } catch {
        return "";
    }
}

export function AuthProvider({ children }) {
    const [token, setToken] = useState(readToken);

    const value = useMemo(() => ({
        token,
        isAuthenticated: Boolean(token),
        login: (nextToken) => {
            localStorage.setItem(TOKEN_KEY, nextToken);
            setToken(nextToken);
        },
        logout: () => {
            localStorage.removeItem(TOKEN_KEY);
            setToken("");
        }
    }), [token]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}
