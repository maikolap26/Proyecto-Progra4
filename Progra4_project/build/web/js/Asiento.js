 // funcion Asiento
function Asiento (numero,tiquete){ 
  this.Asiento(numero,tiquete);
}


// solo metodos
Asiento.prototype={ 
  Asiento: function(numero,tiquete){
      this.numero=numero;
      this.tiquete=tiquete;
  }
};