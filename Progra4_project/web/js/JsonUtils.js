var JsonUtils = JsonUtils || {};
JsonUtils.revive = function (k, v) {
    if (v instanceof Object && v._class == 'Ciudad') {
        return new Ciudad(v.codigo_ciudad, v.nombre, v.pais);
    }
    if (v instanceof Object && v._class == 'Ruta') {
        return new Ruta(v.codigo_ruta, v.ciudadO, v.ciudadD, v.duracion);
    }
    if (v instanceof Object && v._class == 'Vuelo') {
        return new Vuelo(v.codigo_vuelo, v.avion, v.dia_salida, v.hora_salida, v.ruta, v.hora_llegada, v.precio);
    }
    if (v instanceof Object && v._class == 'Login') {
        return new Login(v.usuario, v.contraseña, v.tipo);
    }
    if (v instanceof Object && v._class == 'Usuario') {
        return new Usuario(v.usuario, v.cedula, v.nombre, v.apellidos, v.email, v.telefono, v.celular, v.fecha,v.contrasena);
    }  
     

    return v;
};
JsonUtils.replacer = function (k, v) {
    if (v instanceof Ciudad) {
        v._class = "Ciudad";
    }
    if (v instanceof Vuelo) {
        v._class = "Vuelo";
    }
    if(v instanceof Usuario){
        v._class = "Usuario";
    }
    
    return v;
};

JsonUtils.enviar = function (object){
    return JSON.stringify(object,this.replacer);
    //return JSON.stringify(object);
}