const pad = (numero) => String(numero).padStart(2, "0");

export const formatDate = (date) => {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
};

export const todayISO = () => formatDate(new Date());

export const toDate = (fecha, hora = "00:00") => new Date(`${fecha}T${hora}:00`);

export const dayOfWeek = (fecha) => toDate(fecha).getDay();

export const toMinutes = (hora) => {
    const [horas, minutos] = hora.split(":").map(Number);
    return horas * 60 + minutos;
};

export const toHHMM = (minutos) => {
    return `${pad(Math.floor(minutos / 60))}:${pad(minutos % 60)}`;
};
