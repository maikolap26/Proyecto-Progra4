function AAMController(model,view) {
                this.AAMController(model,view);
            }

            AAMController.prototype={
                AAMController: function(model, view){
                    this.model=model;
                    this.view= view;
                },
                buscar: function(){
                    var origen= this.view.document.getElementById("origen").value;
                    var destino= this.view.document.getElementById("destino").value;
                    if((origen.length > 0) && (destino.length > 0)){
                        model.buscados= model.vuelos.filter(function(v){return (v.codigo_AeropuertoOrigen.includes(origen))&&(v.codigo_AeropuertoDestino.includes(destino)); }
                            )
                    }
                    else{
                        model.buscados=[];
                    }

                }
            };