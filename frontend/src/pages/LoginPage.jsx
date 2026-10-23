import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import FormField from "../components/common/FormField.jsx";
import Icon from "../components/common/Icon.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { useNotify } from "../context/NotificationContext.jsx";
import { login } from "../services/authService.js";
import { validateLogin } from "../utils/validators.js";
import tallerImg from "../assets/taller.png";

const DEMO = { email: "admin@rsdetailing.com", password: "admin1234" };

function LoginPage() {
    const auth = useAuth();
    const notify = useNotify();
    const navigate = useNavigate();
    const location = useLocation();
    const [values, setValues] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    if (auth.isAuthenticated) {
        return <Navigate to="/admin" replace />;
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const nextErrors = validateLogin(values);
        setErrors(nextErrors);
        const firstInvalid = Object.keys(nextErrors)[0];
        if (firstInvalid) {
            document.getElementById(firstInvalid)?.focus();
            return;
        }

        setLoading(true);
        try {
            const data = await login({ email: values.email.trim(), password: values.password });
            auth.login(data.token);
            notify.success(`Hola ${data.user?.nombre ?? ""}, sesión iniciada.`);
            navigate(location.state?.from ?? "/admin", { replace: true });
        } catch (error) {
            notify.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="login" aria-labelledby="titulo-login">
            <div className="login-visual" aria-hidden="true">
                <img src={tallerImg} alt="" />
            </div>
            <div className="login-panel">
                <h1 id="titulo-login">Acceso staff</h1>
                <p>Para el dueño y los detailers. Desde acá se administra el catálogo de servicios y precios.</p>

                <form className="panel-form" onSubmit={handleSubmit} noValidate>
                    <FormField
                        id="email"
                        label="Email"
                        type="email"
                        autoComplete="username"
                        value={values.email}
                        onChange={handleChange}
                        error={errors.email}
                        required
                    />
                    <FormField
                        id="password"
                        label="Contraseña"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        value={values.password}
                        onChange={handleChange}
                        error={errors.password}
                        required
                    >
                        <button
                            type="button"
                            className="field-addon"
                            onClick={() => setShowPassword((prev) => !prev)}
                            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                            aria-pressed={showPassword}
                        >
                            <Icon name={showPassword ? "eyeOff" : "eye"} size={18} />
                        </button>
                    </FormField>

                    <button className="btn btn-primary btn-large btn-block" type="submit" disabled={loading}>
                        {loading ? <><span className="spinner spinner-dark" aria-hidden="true" /> Ingresando...</> : "Ingresar"}
                    </button>
                </form>

                <div className="demo-box">
                    <p>Entorno de prueba: <code>{DEMO.email}</code> / <code>{DEMO.password}</code></p>
                    <button
                        type="button"
                        className="text-link"
                        onClick={() => {
                            setValues(DEMO);
                            setErrors({});
                        }}
                    >
                        Completar con estos datos
                    </button>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;
