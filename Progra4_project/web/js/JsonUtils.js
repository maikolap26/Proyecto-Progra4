var JsonUtils = JsonUtils || {};
JsonUtils.revive = function (k, v) {
    if (v instanceof Object && v._class == 'Ciudad') {
        return new Ciudad(v.codigo_ciudad, v.nombre, v.pais);
    }
    if (v instanceof Object && v._class == 'Ruta') {
        return new Ruta(v.codigo_ruta,v.ciudadO,v.ciudadD,v.duracion);
    }
    if (v instanceof Object && v._class == 'Vuelo') {
        return new Vuelo(v.codigo_vuelo,v.avion,v.dia_salida,v.hora_salida,v.ruta,v.hora_llegada,v.precio);
    }
    if (v instanceof Object && v._class == 'Login') {
		return new Login(v.usuario,v.contraseña,v.tipo);
	}   
    return v;
}
JsonUtils.replacer = function (k, v) {
    if (v instanceof Ciudad) {
        v._class = "Ciudad";
    }
    if (v instanceof Vuelo) {
        v._class = "Vuelo";
    }
    return v;
}