// Dibujo del techo de la cabina: marcos hexagonales de tubos LED en perspectiva.
// Cada tubo es una línea propia para poder "encenderlos" de a uno, como en el taller.

function hexagono(cx, cy, ancho, alto) {
    return [
        [cx - ancho / 2, cy],
        [cx - ancho / 4, cy - alto / 2],
        [cx + ancho / 4, cy - alto / 2],
        [cx + ancho / 2, cy],
        [cx + ancho / 4, cy + alto / 2],
        [cx - ancho / 4, cy + alto / 2]
    ];
}

function marco(cx, cy, ancho, alto) {
    const exterior = hexagono(cx, cy, ancho, alto);
    const interior = hexagono(cx, cy, ancho * 0.46, alto * 0.46);
    const tubos = [];

    for (let i = 0; i < 6; i += 1) {
        const j = (i + 1) % 6;
        tubos.push([exterior[i], exterior[j]]);
        tubos.push([interior[i], interior[j]]);
        tubos.push([exterior[i], interior[i]]);
    }
    tubos.push([interior[0], interior[3]]);
    return tubos;
}

const MARCOS = [
    marco(330, 120, 560, 190),
    marco(1010, 150, 640, 220)
];

function LedCeiling() {
    let indice = 0;

    return (
        <svg className="led-ceiling" viewBox="0 0 1440 300" preserveAspectRatio="xMidYMin slice" aria-hidden="true" focusable="false">
            {/* Varillas que cuelgan del techo */}
            <g className="led-rods">
                {[120, 540, 700, 1330].map((x) => (
                    <line key={x} x1={x} y1="0" x2={x + (x < 720 ? 30 : -30)} y2="60" />
                ))}
            </g>
            <g className="led-tubes">
                {MARCOS.flat().map(([[x1, y1], [x2, y2]]) => {
                    indice += 1;
                    return (
                        <line
                            key={indice}
                            x1={x1.toFixed(1)}
                            y1={y1.toFixed(1)}
                            x2={x2.toFixed(1)}
                            y2={y2.toFixed(1)}
                            style={{ "--i": (indice * 7) % 19 }}
                        />
                    );
                })}
            </g>
        </svg>
    );
}

export default LedCeiling;
