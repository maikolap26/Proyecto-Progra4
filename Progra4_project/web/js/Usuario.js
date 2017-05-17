 // funcion Usuario
function Usuario (cedula,nombre,apellidos,email,telefono,celular,fecha){ 
  this.Usuario(cedula,nombre,apellidos,email,telefono,celular,fecha);
}
function Usuario(usuario) {
  this.Usuario1(usuario);
}

// solo metodos
Usuario.prototype={ 
  Usuario: function(cedula,nombre,apellidos,email,telefono,celular,fecha){
    this.cedula=cedula;
    this.nombre=nombre;
    this.apellidos=apellidos;
    this.email=email;
    this.telefono= telefono;
    this.celular=celular;
    this.fecha=fecha;
  },
  Usuario1: function(usuario) {
    this.usuario=usuario;
  }
}