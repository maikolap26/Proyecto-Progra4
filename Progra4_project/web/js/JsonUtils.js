var JsonUtils = JsonUtils || {};
JsonUtils.revive = function (k, v) {
    if (v instanceof Object && v._class === 'Ciudad') {
        return new Ciudad(v.codigo_ciudad, v.nombre, v.pais);
    }
    if (v instanceof Object && v._class === 'Ruta') {
        return new Ruta(v.codigo_ruta,v.ciudadO,v.ciudadD,v.duracion);
    }
    if (v instanceof Object && v === 'Vuelo') {
        return new Vuelo(v.codigo_vuelo,v.avion,v.dia_salida,v.hora_salida,v.ruta,v.hora_llegada,v.precio);
    }
    if (v instanceof Object && v._class === 'Login') {
		return new Login(v.usuario,v.contraseña,v.tipo);
	}   
    if (v instanceof Object && v._class === 'Avion') {
		return new Avion(v.codigo_Avion,v.modelo,v.marca,v.cant_pasajeros,v.cant_filas,v.cant_Asiento_Fila);
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
    if (v instanceof Avion) {
        v._class = "Avion"; 
    }
    return v;
};