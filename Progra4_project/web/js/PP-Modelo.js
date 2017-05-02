	function AAMModel() {
                this.AAMModel();
            }
            AAMModel.prototype={
                AAMModel: function(){
                    this.ciudades= [
                    new Aeropuerto("SJO","San Jose"),
                    new Aeropuerto("LIB","Guanacaste"),
                    new Aeropuerto("MIA","Miami"),
                    new Aeropuerto("CAN","Cancun"),
                    new Aeropuerto("ORL","Orlando"),
                    new Aeropuerto("ANT","Antigua")
                    ];
                    this.vuelos= [
                    new Ruta("111","San Jose","Orlando","500"),
                    new Ruta("222","Miami","Orlando","700"),
                    new Ruta("333","San Jose","Orlando","350"),
                    new Ruta("999","San Jose","Orlando","100"),
                    new Ruta("000","San Jose","Orlando","250"),
                    new Ruta("111","San Jose","Orlando","500"),
                    new Ruta("222","Miami","Orlando","700"),
                    new Ruta("333","Miami","Orlando","1000"),
                    new Ruta("999","Cancun","Antigua","50"),
                    new Ruta("000","Cancun","Orlando","550"),
                    ];
                    this.buscados=[];
                }
            };