 // funcion Aeropuerto
function Aeropuerto (codigo_Aeropuerto,nombre){ 
  this.Aeropuerto(codigo_Aeropuerto,nombre);
}


// solo metodos
Aeropuerto.prototype={ 
  Aeropuerto: function(codigo_Aeropuerto,nombre){
      this.codigo_Aeropuerto=codigo_Aeropuerto;
      this.nombre=nombre;
  }
}