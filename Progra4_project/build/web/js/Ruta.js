 // funcion Ruta
function Ruta (codigo_Ruta,ciudadO,ciudadD,duracion){ 
  this.Ruta(codigo_Ruta,ciudadO,ciudadD,duracion);
}


// solo metodos
Ruta.prototype={ 
  Ruta: function(codigo_Ruta,ciudadO,ciudadD,duracion){
      this.codigo_Ruta=codigo_Ruta;
      this.ciudadO=ciudadO;
      this.ciudadD=ciudadD;
      this.duracion=duracion;
  }
};