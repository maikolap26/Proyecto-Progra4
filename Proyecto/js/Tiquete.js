// funcion Tiquete
function Tiquete(codigo_Tiquete, cedula_Cliente, codigo_Avion, codigo_AeropuertoOrigen, codigo_AeropuertoDestino, numero_Asiento, fecha_Salida, fecha_Llegada) {
    this.Tiquete(codigo_Tiquete, cedula_Cliente, codigo_Avion, codigo_AeropuertoOrigen, codigo_AeropuertoDestino, numero_Asiento, fecha_Salida, fecha_Llegada);
}


// solo metodos
Tiquete.prototype = {
    Tiquete: function (codigo_Tiquete, cedula_Cliente, codigo_Avion, codigo_AeropuertoOrigen, codigo_AeropuertoDestino, numero_Asiento, fecha_Salida, fecha_Llegada) {
        this.codigo_Tiquete = codigo_Tiquete;
        this.cedula_Cliente = cedula_Cliente;
        this.codigo_Avion = codigo_Avion;
        this.codigo_AeropuertoOrigen = codigo_AeropuertoOrigen;
        this.codigo_AeropuertoDestino = codigo_AeropuertoDestino;
        this.numero_Asiento = numero_Asiento;
        this.fecha_Salida = fecha_Salida;
        this.fecha_Llegada = fecha_Llegada;
    }
}