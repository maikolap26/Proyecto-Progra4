var JsonUtils = JsonUtils || {};
JsonUtils.revive = function (k, v) {
    if (v instanceof Object && v._class == 'Ciudad') {
        return new Ciudad(v.codigo_ciudad, v.nombre, v.pais);
    }
    if (v instanceof Object && v._class == 'Vuelo') {
        return new Vuelo(v.codigo_vuelo,v.codigo_avion,v.dia_salida,v.hora_salida,v.codigo_ruta,v.hora_llegada,v.precio);
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