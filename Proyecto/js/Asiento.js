 // funcion Asiento
function Asiento (codigo_Asiento,numero){ 
  this.Asiento(codigo_Asiento,numero);
}


// solo metodos
Asiento.prototype={ 
  Asiento: function(codigo_Asiento,numero){
      this.codigo_Asiento=codigo_Asiento;
      this.numero=numero;
  }
}