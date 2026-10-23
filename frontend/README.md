# RS Car Detailing — Frontend

Interfaz en React + Vite que consume la API de la Entrega 2 (`../backend`).

## Cómo ejecutarlo

```bash
# 1. Backend (en otra terminal)
cd backend
npm install
npm start            # http://localhost:3000/api

# 2. Frontend
cd frontend
npm install
npm run dev          # http://localhost:5173
```

La URL de la API se puede cambiar con la variable `VITE_API_URL` (por defecto `http://localhost:3000/api`).

**Usuario de prueba:** `admin@rsdetailing.com` / `admin1234` (en el login hay un botón que completa estos datos).

## Pantallas

| Ruta | Pantalla | Acceso |
| --- | --- | --- |
| `/` | Landing: hero, datos, nosotros, servicios, cotizador, trabajos, pasos, CTA | Público |
| `/servicios` | Catálogo completo con precios por vehículo + cotizador | Público |
| `/login` | Acceso staff con validaciones | Público |
| `/admin` | Panel CRUD de servicios (crear, editar, eliminar con confirmación) | Protegida |

## Estructura

```
src/
├── assets/          imágenes (foto del taller y trabajos reales de @rsdetailing27)
├── components/
│   ├── common/      reutilizables: Icon, FormField, LoadingSpinner, StatusMessage,
│   │                NotificationCenter, ConfirmDialog, SectionHeading, ProtectedRoute
│   ├── layout/      Header, Footer, Brand, Layout, MobileActionBar (barra fija en celular)
│   ├── home/        secciones de la landing (Hero, LedCeiling, Nosotros, Galeria...)
│   └── servicios/   ServicioItem, ServicioList, Cotizador, ServicioForm, ServiciosTable...
├── context/         AuthContext (sesión) y NotificationContext (notificaciones)
├── data/            información fija del negocio (contacto, horarios, galería, textos)
├── hooks/           useServicios (carga con estados) y useCotizarServicio
├── pages/           HomePage, ServiciosPage, LoginPage, AdminPage
├── services/        api.js (fetch centralizado), servicioService.js, authService.js
├── styles/          tokens, base, components, layout, home, pages (global.css los importa)
├── utils/           formatters, validators, cotizacion, whatsapp
├── App.jsx          rutas
└── main.jsx         punto de entrada y providers
```

## Cómo cumple la consigna

- **Peticiones centralizadas:** todas pasan por `services/api.js`, que arma la URL, agrega el token,
  detecta respuestas incorrectas y lanza errores con mensaje. Las páginas solo llaman a
  `getServicios`, `createServicio`, `updateServicio`, `deleteServicio` y `login`.
- **Sin datos escritos en componentes:** los servicios vienen de la API; los datos fijos del
  negocio están en `data/negocio.js`.
- **Componentes reutilizables:** `ServicioList` y `CotizadorSection` se usan en la landing y en
  `/servicios`; `FormField` en el login y en el formulario de servicios; `StatusMessage` en
  todos los estados vacíos y de error.
- **Respuesta visual:** spinner en cada carga, botones con estado "Guardando…/Ingresando…",
  notificaciones laterales para éxitos y errores (un solo sistema, sin `alert()`), validación
  por campo y confirmación con `<dialog>` antes de eliminar.
- **Errores de API:** si el backend está apagado se muestra el error con botón "Reintentar";
  si el token vence (401) se cierra la sesión y se avisa.
- **Accesibilidad:** labels asociados, `aria-invalid`/`aria-describedby`, foco visible, skip link,
  textos alternativos, botones semánticos, roles `status`/`alert`, soporte de
  `prefers-reduced-motion`.

El diseño y sus justificaciones frente al boceto están en `../documentacion/justificaciones.md`.
