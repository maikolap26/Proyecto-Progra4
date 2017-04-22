 // funcion Usuario
function Usuario (cedula,usuario,contraseña,nombre,apellidos,email,telefono,celular,fecha){ 
  this.Usuario(cedula,usuario,contraseña,nombre,apellidos,email,telefono,celular,fecha);
}


// solo metodos
Usuario.prototype={ 
  Usuario: function(cedula,usuario,contraseña,nombre,apellidos,email,telefono,celular,fecha){
    this.cedula=cedula;
    this.usuario= usuario;
    this.contraseña=contraseña;
    this.nombre=nombre;
    this.apellidos=apellidos;
    this.email=email;
    this.telefono= telefono;
    this.celular=celular;
    this.fecha=fecha;
  }
}