// funcion Tiquete
function Tiquete(codigo_Tiquete,cedula_Cliente,codigo_Vuelo) {
    this.Tiquete(codigo_Tiquete,cedula_Cliente,codigo_Vuelo);
}


// solo metodos
Tiquete.prototype = {
    Tiquete: function (codigo_Tiquete,cedula_Cliente,codigo_Vuelo) {
        this.codigo_Tiquete=codigo_Tiquete;
        this.cedula_Cliente=cedula_Cliente;
        this.codigo_Vuelo=codigo_Vuelo;
    }
}