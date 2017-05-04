 // funcion Ruta
function Ruta (codigo_Ruta,codigo_CiudadO,codigo_CiudadD,duracion){ 
  this.Ruta(codigo_Ruta,codigo_CiudadO,codigo_CiudadD,duracion);
}


// solo metodos
Ruta.prototype={ 
  Ruta: function(codigo_Ruta,codigo_CiudadO,codigo_CiudadD,duracion){
      this.codigo_Ruta=codigo_Ruta;
      this.codigo_CiudadO=codigo_CiudadO;
      this.codigo_CiudadD=codigo_CiudadD;
      this.duracion=duracion;
  }
}