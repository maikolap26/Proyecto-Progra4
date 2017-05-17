function AAMController(model, view) {
    this.AAMController(model, view);
}

AAMController.prototype = {
    AAMController: function (model, view) {
        this.model = model;
        this.view = view;
        Proxy.getCiudades(function (result) {
            model.ciudades = result;
            view.llenarSelects();
        })
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
    },
    iniciar: function () {
        var us= this.view.document.getElementById("user").value;
        var pass=this.view.document.getElementById("pass").value; 
        var u1= new Login(us,pass,"0");
        var view= this.view;
        Proxy.userLogin(u1,function(result){
             view.inicioSesion(u1);
        });
    }
};