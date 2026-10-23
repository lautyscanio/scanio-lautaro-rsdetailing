// Información fija del negocio (contacto, textos de la landing y galería).
// Vive acá para que los componentes no tengan datos escritos a mano.
import ppfCapot from "../assets/trabajos/ppf-capot.jpg";
import lavadoSuv from "../assets/trabajos/lavado-suv.jpg";
import motorVapor from "../assets/trabajos/motor-vapor.jpg";
import laminaTecho from "../assets/trabajos/lamina-techo.jpg";
import terminacion from "../assets/trabajos/terminacion.jpg";
import fordFrente from "../assets/trabajos/ford-frente.jpg";
import motorFiat from "../assets/trabajos/motor-fiat.jpg";
import ppfDetalle from "../assets/trabajos/ppf-detalle.jpg";

export const NEGOCIO = {
    nombre: "RS Car Detailing",
    lema: "Máxima calidad en cada detalle",
    direccion: "Larsen 3305",
    localidad: "Villa Pueyrredón, CABA",
    codigoPostal: "C1419",
    telefonoVisible: "+54 11 2645-2254",
    whatsapp: "5491126452254",
    instagram: "rsdetailing27",
    instagramUrl: "https://www.instagram.com/rsdetailing27",
    mapsUrl: "https://www.google.com/maps/place/RS+CAR+DETAILING/@-34.5824213,-58.5167165,17z",
    horarios: [
        { dias: "Lunes a sábado", horas: "9:30 a 18:00" },
        { dias: "Domingos", horas: "Cerrado" }
    ]
};

export const DIFERENCIALES = [
    {
        titulo: "Luz que no perdona",
        texto: "Una cabina con tubos LED blancos de alta potencia que deja a la vista cada micro-raya antes de tocar la pintura."
    },
    {
        titulo: "Protección que dura",
        texto: "Tratamientos acrílicos, cerámicos y PPF que cuidan la laca y mantienen el brillo por meses."
    },
    {
        titulo: "Del deportivo a la Transit",
        texto: "Autos de alta gama, de colección y utilitarios grandes reciben el mismo nivel de detalle."
    }
];

// Servicios que el taller ofrece (según su Instagram) y que todavía no tienen precio en el catálogo.
export const OTROS_SERVICIOS = [
    "PPF",
    "Polarizados",
    "Láminas de seguridad",
    "Insonorizaciones",
    "Sacabollos",
    "Reparación de llantas",
    "Restauración de ópticas",
    "Lavado de motor y chasis",
    "Preparación para venta"
];

export const PASOS = [
    { titulo: "Cotizá", texto: "Elegí el servicio y el tipo de vehículo. El precio estimado aparece al instante." },
    { titulo: "Reservá", texto: "Te mandamos el turno disponible por WhatsApp, de lunes a sábado." },
    { titulo: "Retirá", texto: "Revisamos el trabajo con vos bajo la luz de la cabina antes de entregarlo." }
];

// Foto de fondo del hero (decorativa: el título ya describe el servicio).
export const HERO_FONDO = lavadoSuv;

export const GALERIA = [
    {
        src: ppfCapot,
        alt: "Detailer con remera de RS aplicando film protector sobre el capot de un auto gris",
        titulo: "Aplicación de PPF",
        formato: "cuadrado"
    },
    {
        src: laminaTecho,
        alt: "Detailer alisando una lámina sobre el techo de un auto con una espátula",
        titulo: "Lámina en techo",
        formato: "vertical"
    },
    {
        src: motorVapor,
        alt: "Limpieza de motor con vapor en un Volkswagen blanco",
        titulo: "Motor con vapor",
        formato: "vertical"
    },
    {
        src: motorFiat,
        alt: "Fiat plateado con el capot abierto y el motor limpio, con la patente de cortesía de RS",
        titulo: "Motor a nuevo",
        formato: "vertical"
    },
    {
        src: ppfDetalle,
        alt: "Primer plano del film protector transparente recién aplicado sobre el frente de un auto",
        titulo: "PPF de cerca",
        formato: "vertical"
    },
    {
        src: terminacion,
        alt: "Detailer agachado repasando la terminación del lateral de un auto",
        titulo: "Terminación",
        formato: "vertical"
    },
    {
        src: fordFrente,
        alt: "Frente de una camioneta Ford recién tratada con la patente de RS",
        titulo: "Entrega",
        formato: "vertical"
    }
];
