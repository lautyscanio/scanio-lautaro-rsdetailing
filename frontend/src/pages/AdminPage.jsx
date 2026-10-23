import { useState } from "react";
import ConfirmDialog from "../components/common/ConfirmDialog.jsx";
import LoadingSpinner from "../components/common/LoadingSpinner.jsx";
import StatusMessage from "../components/common/StatusMessage.jsx";
import Icon from "../components/common/Icon.jsx";
import ServicioForm from "../components/servicios/ServicioForm.jsx";
import ServiciosTable from "../components/servicios/ServiciosTable.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { useNotify } from "../context/NotificationContext.jsx";
import { useServicios } from "../hooks/useServicios.js";
import { createServicio, deleteServicio, updateServicio } from "../services/servicioService.js";

function AdminPage() {
    const { token, logout } = useAuth();
    const notify = useNotify();
    const { servicios, setServicios, loading, error, reload } = useServicios();
    const [saving, setSaving] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [editing, setEditing] = useState(null);
    const [deleteTarget, setDeleteTarget] = useState(null);

    // Si el token venció, el backend responde 401: cerramos sesión.
    const handleAuthError = (err) => {
        if (err.status === 401) {
            logout();
            notify.error("Tu sesión venció. Volvé a ingresar.");
            return;
        }
        notify.error(err.message);
    };

    const handleSave = async (payload) => {
        setSaving(true);
        try {
            if (editing) {
                const updated = await updateServicio(editing.id, payload, token);
                setServicios((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
                notify.success(`"${updated.nombre}" se actualizó.`);
                setEditing(null);
            } else {
                const created = await createServicio(payload, token);
                setServicios((prev) => [...prev, created]);
                notify.success(`"${created.nombre}" se agregó al catálogo.`);
            }
            return true;
        } catch (err) {
            handleAuthError(err);
            return false;
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        setDeleting(true);
        try {
            await deleteServicio(deleteTarget.id, token);
            setServicios((prev) => prev.filter((item) => item.id !== deleteTarget.id));
            if (editing?.id === deleteTarget.id) setEditing(null);
            notify.success(`"${deleteTarget.nombre}" se eliminó del catálogo.`);
        } catch (err) {
            handleAuthError(err);
        } finally {
            setDeleting(false);
            setDeleteTarget(null);
        }
    };

    const startEdit = (servicio) => {
        setEditing(servicio);
        document.getElementById("form-title")?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    return (
        <section className="admin" aria-labelledby="titulo-admin">
            <div className="container">
                <header className="admin-head">
                    <div>
                        <h1 id="titulo-admin">Catálogo de servicios</h1>
                        <p>Los cambios se publican al instante en la web y en el cotizador.</p>
                    </div>
                    {editing && (
                        <button type="button" className="btn btn-ghost" onClick={() => setEditing(null)}>
                            <Icon name="plus" size={18} /> Nuevo servicio
                        </button>
                    )}
                </header>

                <div className="admin-grid">
                    <div className="admin-list">
                        {loading && <LoadingSpinner text="Cargando servicios..." />}
                        {!loading && error && (
                            <StatusMessage
                                type="error"
                                title="No pudimos cargar el catálogo"
                                text={error}
                                actionLabel="Reintentar"
                                onAction={reload}
                            />
                        )}
                        {!loading && !error && servicios.length === 0 && (
                            <StatusMessage
                                title="El catálogo está vacío"
                                text="Creá el primer servicio con el formulario."
                            />
                        )}
                        {!loading && !error && servicios.length > 0 && (
                            <>
                                <p className="admin-count">
                                    {servicios.length} {servicios.length === 1 ? "servicio publicado" : "servicios publicados"}
                                </p>
                                <ServiciosTable
                                    servicios={servicios}
                                    editingId={editing?.id}
                                    onEdit={startEdit}
                                    onDelete={setDeleteTarget}
                                />
                            </>
                        )}
                    </div>

                    <aside className="admin-form">
                        <ServicioForm
                            initialData={editing}
                            onSubmit={handleSave}
                            onCancel={() => setEditing(null)}
                            isLoading={saving}
                        />
                    </aside>
                </div>
            </div>

            <ConfirmDialog
                open={Boolean(deleteTarget)}
                title="¿Eliminar este servicio?"
                message={`"${deleteTarget?.nombre ?? ""}" dejará de aparecer en la web y en el cotizador. Esta acción no se puede deshacer.`}
                loading={deleting}
                onConfirm={handleDelete}
                onCancel={() => setDeleteTarget(null)}
            />
        </section>
    );
}

export default AdminPage;
