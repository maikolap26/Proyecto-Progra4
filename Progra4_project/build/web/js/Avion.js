 // funcion Avion
function Avion (codigo_Avion,modelo,marca,cant_pasajeros,cant_filas,cant_Asiento_Fila){ 
  this.Avion(codigo_Avion,modelo,marca,cant_pasajeros,cant_filas,cant_Asiento_Fila);
}


// solo metodos
Avion.prototype={ 
  Avion: function(codigo_Avion,modelo,marca,cant_pasajeros,cant_filas,cant_Asiento_Fila){
      this.codigo_Avion=codigo_Avion;
      this.modelo=modelo;
      this.marca=marca;
      this.cant_pasajeros=cant_pasajeros;
      this.cant_filas=cant_filas;
      this.cant_Asiento_Fila=cant_Asiento_Fila;
  }
}