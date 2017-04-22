 // funcion Ruta
function Ruta (codigo_Ruta,codigo_AeropuertoOrigen,codigo_AeropuertoDestino){ 
  this.Ruta(codigo_Ruta,codigo_AeropuertoOrigen,codigo_AeropuertoDestino);
}


// solo metodos
Ruta.prototype={ 
  Ruta: function(codigo_Ruta,codigo_AeropuertoOrigen,codigo_AeropuertoDestino){
      this.codigo_Ruta=codigo_Ruta;
      this.codigo_AeropuertoOrigen=codigo_AeropuertoOrigen;
      this.codigo_AeropuertoDestino=codigo_AeropuertoDestino;
  }
}