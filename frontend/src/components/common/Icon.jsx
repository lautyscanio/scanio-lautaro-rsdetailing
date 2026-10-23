// Set de íconos propio: mismo trazo y tamaño en toda la interfaz.
const PATHS = {
    check: <path d="M5 12.5l4.2 4.2L19 7" />,
    alert: (
        <>
            <path d="M12 3.5l9 16H3z" />
            <path d="M12 10v4.2M12 17.3v.2" />
        </>
    ),
    close: <path d="M6 6l12 12M18 6L6 18" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    pin: (
        <>
            <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0113 0c0 5.4-6.5 11-6.5 11z" />
            <circle cx="12" cy="10" r="2.4" />
        </>
    ),
    clock: (
        <>
            <circle cx="12" cy="12" r="8.5" />
            <path d="M12 7.5V12l3 2" />
        </>
    ),
    phone: <path d="M6.5 3.8l3 .4 1.3 3.8-2 1.6a12 12 0 005.6 5.6l1.6-2 3.8 1.3.4 3a1.6 1.6 0 01-1.7 1.7A17 17 0 014.8 5.5a1.6 1.6 0 011.7-1.7z" />,
    instagram: (
        <>
            <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <path d="M17.2 6.8v.1" />
        </>
    ),
    whatsapp: (
        <>
            <path d="M4.5 19.5l1.2-3.9A8 8 0 1112 20a8 8 0 01-3.9-1z" />
            <path d="M9.2 8.6c.2 2.9 2.4 5.3 5.4 5.9l1-1.2-1.6-.9-.8.7a4.3 4.3 0 01-2.6-2.6l.7-.8-.9-1.6z" />
        </>
    ),
    edit: <path d="M4.5 19.5l1-4L15.8 5.2a2 2 0 012.9 0l.1.1a2 2 0 010 2.9L8.5 18.5z M13.5 7.5l3 3" />,
    trash: <path d="M4.5 7h15M10 4h4M6.5 7l.9 12.2a1.5 1.5 0 001.5 1.3h6.2a1.5 1.5 0 001.5-1.3L17.5 7M10 11v6M14 11v6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    eye: (
        <>
            <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
            <circle cx="12" cy="12" r="3" />
        </>
    ),
    eyeOff: <path d="M3 3l18 18M10.6 6a9.6 9.6 0 011.4-.1C18 5.9 21.5 12 21.5 12a17 17 0 01-2.8 3.5M6.5 7.4A17 17 0 002.5 12S6 18.5 12 18.5a9 9 0 004-.9M9.9 9.9a3 3 0 004.2 4.2" />,
    logout: <path d="M14 4.5h3.5a2 2 0 012 2v11a2 2 0 01-2 2H14M10 16l-4-4 4-4M6 12h9.5" />,
    auto: <path d="M3 15.5v-2.2c0-.8.5-1.5 1.3-1.7l2.7-.8 2.4-3a2 2 0 011.6-.8h3.6a2 2 0 011.5.7l2.6 3 1.3.4c.8.3 1.3 1 1.3 1.8v2.6M3 15.5h2M19 15.5h2M9 15.5h6M7 17.5a2 2 0 100-4 2 2 0 000 4zM17 17.5a2 2 0 100-4 2 2 0 000 4z" />,
    camioneta: <path d="M2.5 16V8a1.5 1.5 0 011.5-1.5h9.5V16M13.5 9.5h4l3 3.5V16M2.5 16h2M9 16h6M19.5 16h1M6.8 18a2 2 0 100-4 2 2 0 000 4zM17.2 18a2 2 0 100-4 2 2 0 000 4z" />
};

function Icon({ name, size = 20, className = "" }) {
    return (
        <svg
            className={`icon ${className}`}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
        >
            {PATHS[name]}
        </svg>
    );
}

export default Icon;
