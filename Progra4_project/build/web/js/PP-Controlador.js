function AAMController(model, view) {
    this.AAMController(model, view);
}

AAMController.prototype = {
    AAMController: function (model, view) {
        this.model = model;
        this.view = view;
        Proxy.getCiudades(function(result){
            model.ciudades=result;
            view.llenarSelects();
        })
    },
    buscar: function () {
         var model=this.model;
        var view= this.view;
        var origen = view.document.getElementById("origen").value;
        var destino = view.document.getElementById("destino").value;
      
        if ((origen.length > 0) && (destino.length > 0)) {
                Proxy.vuelosSearch(origen,destino,function(result){
                model.buscados =result;
                view.showBuscados();
            });
        } else {
            model.buscados = [];
        }
    }
};