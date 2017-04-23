 // funcion Ruta
function Ruta (codigo_Ruta,codigo_AeropuertoOrigen,codigo_AeropuertoDestino,precio){ 
  this.Ruta(codigo_Ruta,codigo_AeropuertoOrigen,codigo_AeropuertoDestino,precio);
}


// solo metodos
Ruta.prototype={ 
  Ruta: function(codigo_Ruta,codigo_AeropuertoOrigen,codigo_AeropuertoDestino,precio){
      this.codigo_Ruta=codigo_Ruta;
      this.codigo_AeropuertoOrigen=codigo_AeropuertoOrigen;
      this.codigo_AeropuertoDestino=codigo_AeropuertoDestino;
      this.precio=precio;
  }
}