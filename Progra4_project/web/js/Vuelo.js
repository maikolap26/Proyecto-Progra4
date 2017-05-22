// funcion Vuelo
function Vuelo(codigo_vuelo, dia_salida, hora_salida, hora_llegada, Ruta, Avion, precio) {
    this.Vuelo(codigo_vuelo, dia_salida, hora_salida, hora_llegada, Ruta, Avion, precio);
}


// solo metodos
Vuelo.prototype = {
    Vuelo: function (codigo_vuelo, dia_salida, hora_salida, hora_llegada, Ruta, Avion, precio) {
        this.codigo_vuelo = codigo_vuelo;
        this.Avion = Avion;
        this.dia_salida = dia_salida;
        this.hora_salida = hora_salida;
        this.Ruta = Ruta;
        this.hora_llegada = hora_llegada;
        this.precio = precio;

    }
};

