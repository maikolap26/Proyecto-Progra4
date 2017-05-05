function AAMModel() {
    this.AAMModel();
}
AAMModel.prototype = {
    AAMModel: function () {
        this.ciudades = [
            new Ciudad("SJO", "San Jose", "Costa Rica"),
            new Ciudad("LIB", "Guanacaste", "Costa Rica"),
            new Ciudad("MIA", "Miami", "USA"),
            new Ciudad("CAN", "Cancun", "Mexico"),
            new Ciudad("ORL", "Orlando", "USA"),
            new Ciudad("ANT", "Antigua", "Guatemala")
        ];
        this.vuelos = [
            new Ruta("111", this.ciudades[0].nombre, this.ciudades[2].nombre, "500"),
            new Ruta("222", this.ciudades[2].nombre, this.ciudades[4].nombre, "700"),
            new Ruta("333", this.ciudades[0].nombre, this.ciudades[2].nombre, "350"),
            new Ruta("999", this.ciudades[3].nombre, this.ciudades[1].nombre, "100"),
            new Ruta("000", this.ciudades[0].nombre, this.ciudades[4].nombre, "250")
        ];

        this.buscados = [];
    }
};