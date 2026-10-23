import { request } from "./api.js";

export function login(credentials) {
    return request("/auth/login", { method: "POST", body: credentials });
}
