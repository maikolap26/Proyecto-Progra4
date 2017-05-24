function AAMController(model, view) {
    this.AAMController(model, view);
}

AAMController.prototype = {
    AAMController: function (model, view) {
        this.model = model;
        this.view = view;
        if (window.location.pathname != "/Progra4_project/Registro.jsp" && window.location.pathname != "/Progra4_project/Aviones_2.jsp") {
            Proxy.getCiudades(function (result) {
                model.ciudades = result;
                view.llenarSelects();
            });
        }
        if(window.location.pathname == "/Progra4_project/Aviones_2.jsp"){
            Proxy.avionSearch(function (result) {
                model.buscados = result;
                view.llenarAviones();
            });
        }
        if(window.location.pathname == "/Progra4_project/Ciudades_2.jsp"){
            Proxy.getCiudades(function (result) {
                model.buscados = result;
                view.llenarCiudades();
            });
        }
        if(window.location.pathname == "/Progra4_project/Rutas_2.jsp"){
            Proxy.rutaSearch(function (result) {
                model.buscados = result;
                view.llenarRutas();
            });
        }
        if(window.location.pathname == "/Progra4_project/Vuelos_2.jsp"){
            Proxy.vueloSearch(function (result) {
                model.buscados = result;
                view.llenarVuelos();
            });
        }
        
    },
    buscar: function () {

        var origen = this.view.document.getElementById("origen").value;
        var destino = this.view.document.getElementById("destino").value;
        var model = this.model;
        var view = this.view;
        if ((origen.length > 0) && (destino.length > 0)) {
            Proxy.vuelosSearch(origen, destino, function (result) {
                model.buscados = result;
                view.showBuscados();
            });
        } else {
            model.buscados = [];
        }
    }
};