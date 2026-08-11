class Turno {
    constructor(id, fecha, hora, idCliente, idVehiculo, idServicio, idEmpleado, estado, precioFinal) {
        this.id = id;
        this.fecha = fecha;
        this.hora = hora;
        this.idCliente = idCliente;
        this.idVehiculo = idVehiculo;
        this.idServicio = idServicio;
        this.idEmpleado = idEmpleado;
        this.estado = estado;
        this.precioFinal = precioFinal;
    }
}

export default Turno;
