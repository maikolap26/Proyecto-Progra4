function AAMController(model, view) {
    this.AAMController(model, view);
}

AAMController.prototype = {
    AAMController: function (model, view) {
        this.model = model;
        this.view = view;
    },
    buscar: function () {
        var origen = this.view.document.getElementById("origen").value;
        var destino = this.view.document.getElementById("destino").value;
        if ((origen.length > 0) && (destino.length > 0)) {
            Proxy.vuelosSearch(origen,destino,function(result){
                model.buscados =result;
            });
            
           /* 
            model.buscados = model.vuelos.filter(function (v) {
                return (v.ciudadO.includes(origen)) && (v.ciudadD.includes(destino));
            }
            )*/
        } else {
            model.buscados = [];
        }

    }
};