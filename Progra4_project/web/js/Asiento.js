 // funcion Asiento
function Asiento (numero,codigo_Tiquete){ 
  this.Asiento(numero,codigo_Tiquete);
}


// solo metodos
Asiento.prototype={ 
  Asiento: function(numero,codigo_Tiquete){
      this.numero=numero;
      this.codigo_Tiquete=codigo_Tiquete;
  }
}