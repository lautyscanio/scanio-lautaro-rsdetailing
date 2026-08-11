class HistorialServicio {
    constructor(id, idTurno, idVehiculo, idServicio, fecha, observaciones, recomendaciones) {
        this.id = id;
        this.idTurno = idTurno;
        this.idVehiculo = idVehiculo;
        this.idServicio = idServicio;
        this.fecha = fecha;
        this.observaciones = observaciones;
        this.recomendaciones = recomendaciones;
    }
}

export default HistorialServicio;
