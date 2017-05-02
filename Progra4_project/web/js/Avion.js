 // funcion Avion
function Avion (codigo_Avion,tipo){ 
  this.Avion(codigo_Avion,tipo);
}


// solo metodos
Avion.prototype={ 
  Avion: function(codigo_Avion,tipo){
      this.codigo_Avion=codigo_Avion;
      this.tipo=tipo;
  }
}