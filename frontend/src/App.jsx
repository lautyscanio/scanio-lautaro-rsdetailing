import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import ServiciosPage from "./pages/ServiciosPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/servicios" element={<ServiciosPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/admin"
                    element={(
                        <ProtectedRoute>
                            <AdminPage />
                        </ProtectedRoute>
                    )}
                />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Layout>
    );
}

export default App;
