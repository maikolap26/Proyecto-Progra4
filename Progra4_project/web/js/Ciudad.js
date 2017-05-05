 // funcion Ciudad
function Ciudad (codigo_Ciudad,nombre,pais){ 
  this.Ciudad(codigo_Ciudad,nombre,pais);
}

// solo metodos
Ciudad.prototype={ 
  Ciudad: function(codigo_Ciudad,nombre,pais){
      this.codigo_Ciudad=codigo_Ciudad;
      this.nombre=nombre;
      this.pais=pais;
  }
};