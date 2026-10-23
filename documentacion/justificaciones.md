# Diseño web — RS Car Detailing

Actualización del boceto original (`justificaciones.docx`) para la Entrega 3.
Se mantiene la estructura y el concepto del boceto. Los cambios visuales están
justificados con material real del negocio: fotos de su Instagram (@rsdetailing27)
y el cartel del taller.

## 1. Qué se mantiene del boceto

| Boceto original | En el frontend |
| --- | --- |
| Landing vertical (one-page scroll) | Se mantiene: Hero → Datos → Sobre nosotros → Servicios → Cotizador → Trabajos → Cómo reservar → CTA + Footer |
| Historia de transformación: impacto, credibilidad, servicios, acción | Mismo orden de lectura |
| Negro profundo `#0A0A0A` como fondo principal | Se mantiene (`#0A0B0D`, un tono apenas más azulado, como las paredes de la cabina) |
| Gris metálico `#2A2A2A / #3D3D3D` para cards y separadores | Se mantiene para paneles y líneas (`#16191E`, `#1D2128` y bordes translúcidos) |
| La iluminación LED blanca como concepto central | Se refuerza: el techo de tubos LED se dibuja en el hero y se "enciende" al cargar |
| Inter como tipografía de lectura | Reemplazada por Archivo (ver 2.3) |

## 2. Mejoras justificadas

### 2.1 Acento: de cyan eléctrico a azul y amarillo RS

El boceto usaba cyan `#00D9FF` para representar la luz LED. Al revisar las fotos
reales del taller vimos que:

- la luz LED es **blanca**, no cyan;
- el logo del negocio es **azul y amarillo** (aparece en las remeras, la patente
  de cortesía y el cartel de servicios);
- el piso de la cabina tiene **baldosas azules y grises**.

Por eso la luz LED pasa a ser blanca (`#EEF2F7`) y los acentos salen de la marca:

| Rol | Color | Uso |
| --- | --- | --- |
| Amarillo RS | `#FFCB2E` | Botones de acción principal, precios destacados, foco del teclado |
| Azul RS | `#2F5BFF` | La "R" del logo |
| Azul piso | `#1A3CCC` | Fondo del cotizador, con el patrón de baldosas del piso |
| Blanco LED | `#EEF2F7` | Texto principal y líneas de luz |

El amarillo sobre negro tiene un contraste de 13:1 y el texto blanco sobre el azul
del cotizador, 7:1. Los dos superan el mínimo WCAG AA (4,5:1).

**Más presencia del azul.** El azul del piso no queda como detalle: ocupa franjas
completas, igual que en la cabina real. La franja de datos (horarios, dirección,
WhatsApp) y el cotizador usan el azul con el patrón de baldosas. Además se ve un
reflejo azul del piso al pie del hero y del cierre, los pasos de reserva van en
círculos azules, y las etiquetas, las leyendas de las fotos y el borde del footer
también son azules. El amarillo queda reservado para las acciones (botones),
así el usuario siempre sabe dónde tocar.

### 2.2 Del cyan "tecnológico" a una identidad propia

El negro con un solo acento neón brillante es una estética muy repetida en webs
de autos. Usar los colores reales de RS hace que la página se reconozca como
**de este taller** y no como una plantilla.

### 2.3 Tipografía: Archivo en lugar de Rajdhani + Inter

- **Archivo expandida (ancho 125%, peso 800)** para títulos. Las letras anchas y
  pesadas remiten a la gráfica automotriz (badges, patentes, logos de marcas) y
  son más legibles que Rajdhani en tamaños chicos y en celulares.
- **Archivo normal (peso 400–650)** para textos. Al ser la misma familia, la página
  se ve coherente y carga una sola fuente.
- Los números de precios usan cifras tabulares para que queden alineados.

### 2.4 Contenido nuevo pedido por la ficha técnica

La ficha técnica decía que la web debía:

1. **Mostrar el nivel de detalle con fotos reales** → sección *Trabajos recientes*
   con fotos de su Instagram.
2. **Explicar qué incluye cada tratamiento** → lista de servicios con descripción,
   precio para auto, precio para camioneta y duración, todo desde la API.
3. **Cotizar según el tamaño del vehículo** → *Cotizador*: aplica la regla de
   negocio `precio base × coeficiente camioneta` y arma el mensaje de reserva por
   WhatsApp con el servicio, el vehículo y el precio.

### 2.5 Hero con foto de fondo

La portada usa de fondo una foto real del taller: un detailer con la remera de RS
lavando una camioneta blanca, bajo el techo LED y sobre el piso azul. La foto se
funde con el negro hacia el lado del texto, así el título se lee bien y la imagen
muestra el lugar sin competir con el mensaje. En celular la foto ocupa la parte
superior, debajo del dibujo del techo LED.

### 2.6 Pensada primero para celular

La mayoría de los clientes llega desde Instagram, en el celular. Por eso:

- Todos los botones y controles miden al menos 44px de alto, el tamaño recomendado
  para tocar con el dedo.
- Al bajar más allá de la portada aparece una **barra fija inferior** con
  "Cotizar" y "Reservar por WhatsApp", así la acción principal está siempre a un
  toque. Se oculta mientras se ve el cotizador, para no repetir su botón, y no
  aparece en el login ni en el panel.
- Las notificaciones suben para no quedar tapadas por la barra.
- El menú se abre como panel completo, con opciones grandes.
- La tabla del panel se convierte en tarjetas apiladas.
- No hay scroll horizontal en ningún ancho, probado en 360px y 390px.

## 3. Elemento distintivo

El hero dibuja el techo de la cabina (marcos hexagonales de tubos LED) con SVG.
Al cargar, los tubos se encienden con el parpadeo típico de un fluorescente. Es
la única animación "de presentación"; el resto del movimiento es feedback
(botones, notificaciones, diálogo). Si el usuario tiene activado "reducir
movimiento" en su sistema, los tubos aparecen encendidos directamente.

## 4. Accesibilidad

- Enlace "Saltar al contenido", navegación con teclado y foco visible amarillo.
- Todos los `label` están asociados a su `input` (componente `FormField`).
- Errores de formulario con `aria-invalid` y `aria-describedby`, y foco en el
  primer campo con error.
- Notificaciones con `role="status"` (éxito) y `role="alert"` (error).
- Diálogo de confirmación con `<dialog>` nativo: atrapa el foco y cierra con Escape.
- Textos alternativos que describen cada foto.
- Contraste AA en todos los textos.
