# Sistema de diseño — RS Car Detailing

**Concepto:** la cabina de trabajo de RS. Paredes negras mate, techo de marcos hexagonales
con tubos LED blancos, piso de baldosas azules y el logo RS en azul y amarillo.

Tokens en `frontend/src/styles/tokens.css`.

## Color
| Token | Valor | Uso |
| --- | --- | --- |
| `--ink` | `#0A0B0D` | Fondo general |
| `--wall` | `#111317` | Franjas y encabezados de tabla |
| `--panel` / `--panel-2` | `#16191E` / `#1D2128` | Paneles, formulario, diálogo, notificaciones |
| `--line` / `--line-strong` | blanco al 12% / 26% | Separadores y bordes |
| `--led` | `#EEF2F7` | Texto principal y líneas de luz |
| `--muted` / `--dim` | `#A7AEBB` / `#828A97` | Texto secundario y terciario |
| `--yellow` | `#FFCB2E` | Acción principal, precios, foco |
| `--blue` | `#2F5BFF` | "R" del logo |
| `--blue-deep` | `#1A3CCC` | Fondo del cotizador (con baldosas) |
| `--danger` / `--success` | `#FF6166` / `#45D99A` | Errores y confirmaciones |

Estrategia: base negra con amarillo como único color de acción. El azul es el segundo
color estructural: ocupa franjas completas con patrón de baldosas (datos y cotizador),
aparece como reflejo del piso al pie del hero y del cierre, y marca pasos, etiquetas,
leyendas de fotos y el borde del footer.

## Tipografía
Una sola familia: **Archivo** (Google Fonts, variable en ancho y peso).
- Títulos: ancho 125%, peso 800, interletra −0.02 a −0.03em.
- Subtítulos: ancho 112%, peso 700.
- Texto: ancho 100%, peso 400–650, interlineado 1.6.
- Precios: cifras tabulares.

## Forma
- Radios: 14px (paneles y fotos), 10px (inputs), 999px (botones y etiquetas).
- Elevación: solo paneles flotantes (cotizador, diálogo, notificaciones) llevan sombra.

## Firma
- **Foto de fondo del hero:** detailer RS lavando una camioneta, con máscara de fundido
  hacia el texto.
- **Techo LED** (`LedCeiling.jsx`): marcos hexagonales en SVG. Cada tubo se enciende con
  parpadeo de fluorescente al cargar, una sola vez.
- **Línea de luz:** subrayado del menú, guiones de los diferenciales, borde superior de
  cada servicio al pasar el mouse y tubo del CTA final.

## Celular primero
- La mayoría de las visitas llegan desde Instagram en el celular. Se diseña y se prueba
  primero en 360–390px.
- Objetivos táctiles de al menos 44px.
- `MobileActionBar`: barra fija inferior (Cotizar + WhatsApp). Aparece al pasar el hero y
  se oculta sobre el cotizador. No se muestra en `/login` ni en `/admin`.
- El hero en celular: foto arriba, fundida hacia abajo, y el texto debajo.

## Movimiento
- Curva `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`.
- Botones: `scale(0.97)` al presionar (160ms).
- Notificaciones: entrada desde abajo (380ms), pausa al pasar el mouse.
- Diálogo: `scale(0.96)` a 1 (240ms).
- Hover solo en dispositivos con mouse. Con `prefers-reduced-motion` se desactiva todo.

## Componentes
Botones (clases `.btn-*`), `FormField`, `Icon`, `LoadingSpinner`, `StatusMessage`,
`NotificationCenter`, `ConfirmDialog`, `SectionHeading`, `ServicioItem`, `ServicioList`,
`Cotizador`, `ServiciosTable`, `ServicioForm`.
