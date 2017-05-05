 // funcion Vuelo
function Vuelo (codigo_vuelo,codigo_avion,dia_salida,hora_salida,codigo_ruta,hora_llegada,precio){ 
  this.Vuelo(codigo_vuelo,codigo_avion,dia_salida,hora_salida,codigo_ruta,hora_llegada,precio);
}


// solo metodos
Vuelo.prototype={ 
  Vuelo: function(codigo_vuelo,codigo_avion,dia_salida,hora_salida,codigo_ruta,hora_llegada,precio){
      this.codigo_vuelo=codigo_vuelo;
      this.dia_salida=dia_salida;
      this.hora_salida=hora_salida;
      this.codigo_ruta=codigo_ruta;
      this.hora_llegada=hora_llegada;
      this.precio=precio;
      this.codigo_avion=codigo_avion;
  }
};

