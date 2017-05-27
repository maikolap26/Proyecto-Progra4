var model;
var controller;
var vuelos;
var ciudades;
var usuario;
var usuarios;
var numeroVuelo;
var asientosSelec;
var asientos = [];
var cantidad = 0;
var map;
var markers = [];

function pageLoad(event) {
    model = new AAMModel();
    vuelos = model.vuelos;
    ciudades = model.ciudades;
    controller = new AAMController(model, window);
    llenarDescuentos();
    myMap();
    $("#buscar").click(function () {
        controller.buscar();
    });

    var a = document.getElementById("cancelOrder");
    var b = document.getElementById("goTi");
    var c = document.getElementById("goTi");

    if (a != null) {
        c.addEventListener("click", goAsientos);
        b.disabled = false;
        a.addEventListener("click", cancelOrden);
    }
}
function llenarDescuentos() {
    for (var i = 1; i < 6; i++) {
        var imagen = document.createElement("img");
        var image = "img/d" + i + ".jpg";
        imagen.src = image;//direccion de la imagen 
        imagen.class = 'img-responsive';
        imagen.name = "img" + i;
        imagen.alt = '';
        var id = "div" + i;
        var actual = document.getElementById(id);
        if (actual != null)
            actual.appendChild(imagen);
    }
}
function llenarSelects() {
    var origen = document.getElementById("origen");
    var destino = document.getElementById("destino");

    for (var i = 0; i < model.ciudades.length; i++) {
        var option = document.createElement("option");
        option.value = model.ciudades[i].nombre;
        option.innerHTML = model.ciudades[i].nombre;
        origen.appendChild(option);
    }
    for (var i = 0; i < model.ciudades.length; i++) {
        var option = document.createElement("option");
        option.value = model.ciudades[i].nombre;
        option.innerHTML = model.ciudades[i].nombre;
        destino.appendChild(option);
    }
}
function goAsientos() {
    document.getElementById("info").style.display = "none";
    document.getElementById("goTi").style.color = "gray";
    var avionAsi = document.getElementById("avionAsientos");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    div2.id = "asientosAvion";
    div1.classList.add("divAvionAsientos");
    var imag = document.createElement("img");
    imag.src = "img/avion.png";
    imag.id = "imag";
    div1.appendChild(imag);
    avionAsi.appendChild(div1);
    var aux = 1;
    for (var i = 0; i < 11; i++) {

        var tr = document.createElement("tr");
        for (var j = 0; j < 15; j++) {
            var td = document.createElement("td");
            if (i == 5) {
                var b = document.createElement("input");
                b.type = "button";
                b.classList.add("asientoV");
                td.appendChild(b);
                tr.appendChild(td);
                b = document.createElement("input");
                b.type = "button";
                b.classList.add("asientoV");
                td.appendChild(b);
                tr.appendChild(td);
            }
            if (i == 0) {
                var b = document.createElement("input");
                b.type = "button";
                b.classList.add("asientoV");
                td.appendChild(b);
                tr.appendChild(td);
            }

            var b = document.createElement("input");
            b.type = "button";
            b.value = aux;
            b.classList.add("asiento");
            td.appendChild(b);
            tr.appendChild(td);
            aux++;


        }
        div2.appendChild(tr);
    }
    avionAsi.appendChild(div2);
}
function mostrarAsientos() {
    var numero = numeroVuelo;
    var avion = model.buscados[numero].avion;
    document.getElementById("info").style.display = "none";
    var avionAsi = document.getElementById("avionAsientos");
    avionAsi.style.display = "block";
    var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var bandera = 0;
    for (var i = 0; i < avion.cant_filas; i++) {
        var fila = document.createElement("tr");
        fila.id = i.toString();
        for (var j = 0; j < avion.cant_Asiento_Fila; j++) {
            var columna = document.createElement("td");
            columna.id = j.toString();
            var b = document.createElement("input");
            if (Math.trunc(avion.cant_Asiento_Fila / 2) === j && bandera === 0) {
                var c = document.createElement("input");
                c.type = "button";
                c.classList.add("asientoV");
                c.value = "Pasillo";
                c.id = "pasillo";
                columna.id = j.toString() + "p";

                columna.appendChild(c);
                fila.appendChild(columna);
                bandera = 1;
                j = j - 1;
            } else {
                b.type = "button";
                b.value = x[i] + j.toString();
                b.id = x[i] + j.toString();
                b.classList.add("asiento");
                columna.id = j.toString();
                b.addEventListener("click", agregaAsiento);
                columna.appendChild(b);
                fila.appendChild(columna);
            }
        }
        bandera = 0;
        avionAsi.appendChild(fila);
    }
}
function agregaAsiento() {
    if (asientos.length === cantidad) {
        while (asientos.length > 0) {
            var as = asientos.pop();
            document.getElementById(as.id).classList.remove("seleccionado");
        }
    }
    asientos.push(this);
    this.classList.add("seleccionado");
}
function cancelOrden() {
    var compra = document.getElementById("compra");
    compra.classList.remove("popupComprar");
    compra.style.display = "none";
    document.getElementById("cuerpo").style.opacity = 1;
}
function showBuscados() {
    //controller.buscar();
    var s = document.getElementById("tablaBusqueda");
    var aux = document.getElementById("resultBusq");
    if (aux === null) {
        var thea = document.createElement("thead");
        var x = document.createElement("tr");
        var y = document.createElement("th");
        y.id = "resultBusq";
        x.appendChild(y);
        thea.appendChild(x);
        s.appendChild(thea);
    }
    var buscado = document.getElementById("buscado");
    while (s.childNodes.length > 0 && aux !== null && buscado !== null) {
        s.removeChild(buscado);
        buscado = document.getElementById("buscado");
    }
    for (var i = 0; i < model.buscados.length; i++) {
        var t = document.createElement("tr");
        t.id = "filabusq";
        var t1 = document.createElement("td");
        t1.innerHTML = i + 1 + ". Desde: " + model.buscados[i].ruta.ciudadO.nombre + " hasta " + model.buscados[i].ruta.ciudadD.nombre + "      $ " + model.buscados[i].precio;
        t.id = "buscado";
        t.appendChild(t1);
        var t2 = document.createElement("td");
        var boton = document.createElement("input");
        boton.id = "i";
        boton.type = "button";
        boton.value = " Comprar ";
        boton.addEventListener("click", openInfo);
        t2.appendChild(boton);
        t.appendChild(t2);
        s.appendChild(t);
    }
    aux = document.getElementById("sinBusq");
    if (aux === null && model.buscados.length === 0) {
        var t = document.createElement("tr");
        t.id = "buscado";
        t.innerHTML = "Sin resultados...";
        s.appendChild(t);
    }
}
function openInfo() {
    numeroVuelo = this.id;
    var index = this.id;
    console.log(index);
    var compra = document.getElementById("compra");
    compra.classList.add("popupComprar");
    compra.style.display = "block";
    document.getElementById("cuerpo").style.opacity = .70;
    var fecPar = document.getElementById("datepicker1").value;
    var fecLle = document.getElementById("datepicker2").value;
    document.getElementById("partida").innerHTML = fecPar;
    document.getElementById("regreso").innerHTML = fecLle;
    var ori = document.getElementById("origen").value;
    var dest = document.getElementById("destino").value;
    document.getElementById("origenC").innerHTML = ori;
    document.getElementById("destinoC").innerHTML = dest;
    document.getElementById("cantidad").innerHTML = document.getElementById("combo").value;
    cantidad = parseInt(document.getElementById("combo").value);
    document.getElementById("price").innerHTML = " $ " + model.buscados[index].precio;
}
function doFocus(event) {
    event.target.className = "focus";
}
function doBlur(event) {
    event.target.className = "nofocus";
}
function redireccionar() {
    location = "Registro.jsp";
}
function redireccionar1() {
    location = "UsuarioCliente.jsp";
}
function redireccionar2() {
    location = "UsuarioAdmin.jsp";
}
function enableInput(){
    document.getElementById("correo").disabled = false;
    document.getElementById("contraseña").disabled = false;
    document.getElementById("contraseña1").disabled = false;
    document.getElementById("nombre").disabled = false;
    document.getElementById("apellidos").disabled = false;
    document.getElementById("cedula").disabled = false;
    document.getElementById("telefono").disabled = false;
    document.getElementById("celular").disabled = false;
}

function doValidate(event) {
    var user = document.getElementById("usuario");
    var contraseña = document.getElementById("contraseña");
    var cedula = document.getElementById("cedula");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellidos");
    var correo = document.getElementById("correo");
    var telefono = document.getElementById("telefono");
    var celular = document.getElementById("celular");
    var fecha = document.getElementById("fechaNacimiento");
    var confCont = document.getElementById("contraseña1");
    var error = false;

    if (user != null) {
        if (user.value == "") {
            error = true;
            user.className = "error";
        }
    }

    if (contraseña != null) {
        if (contraseña.value == "") {
            error = true;
            contraseña.className = "error";
        }
    }

    if (cedula != null) {
        if (cedula.value == "") {
            error = true;
            cedula.className = "error";
        }
    }

    if (nombre != null) {
        if (nombre.value == "") {
            error = true;
            nombre.className = "error";
        }
    }

    if (apellido != null) {
        if (apellido.value == "") {
            error = true;
            apellido.className = "error";
        }
    }

    if (correo != null) {
        if (correo.value == "") {
            error = true;
            correo.className = "error";
        }
    }

    if (telefono != null) {
        if (telefono.value == "") {
            error = true;
            telefono.className = "error";
        }
    }

    if (celular != null) {
        if (celular.value == "") {
            error = true;
            celular.className = "error";
        }
    }

    if (fecha != null) {
        if (fecha.value == "") {
            error = true;
            fecha.className = "error";
        }
    }
    if (confCont != null) {
        if (confCont.value == "") {
            error = true;
            confCont.className = "error";
        }
    }

    if (error == true) {
        event.preventDefault();
    }

}

function doSubmit() {
    var user = document.getElementById("usuario");
    var contraseña = document.getElementById("contraseña");
    var cedula = document.getElementById("cedula");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellidos");
    var correo = document.getElementById("correo");
    var telefono = document.getElementById("telefono");
    var celular = document.getElementById("celular");
    var fecha = document.getElementById("fechaNacimiento");

    usuario = new Usuario(user.value, cedula.value, nombre.value, apellido.value, correo.value, telefono.value, celular.value, fecha.value, contraseña.value);
    var formulario = document.getElementById("formulario");
    if (formulario != null) {
        formulario.addEventListener("submit", doValidate);
        Proxy.guardar(usuario, function (result) {
        });
    }
    //formulario.reset();
}

function doSubmitAvion() {
    var codigo = document.getElementById("cod_Avion");
    var cantAsF = document.getElementById("cant_Asientos");
    var cantFil = document.getElementById("cant_Filas");
    var cantPas = document.getElementById("cant_Pasa");
    var marca = document.getElementById("marca");
    var modelo = document.getElementById("modelo");

    var av1 = new Avion(codigo.value, modelo.value, marca.value, cantPas.value, cantFil.value, cantAsF.value);
    Proxy.guardar1(av1, function (result) {});
}

function doSubmitCiudades() {
    var codigo = document.getElementById("codigo");
    var nombre = document.getElementById("nombre");
    var pais = document.getElementById("pais");

    var ciudad = new Ciudad(codigo.value, nombre.value, pais.value);
    Proxy.guardar2(ciudad, function (result) {});
}

function doSubmitRutas() {
    var codigo = document.getElementById("codigo");
    var origen = document.getElementById("origen");
    var destino = document.getElementById("destino");
    var duracion = document.getElementById("duracion");
    var ciudadO;
    var ciudadD;
    Proxy.getCiudad(origen.value, destino.value, function (result) {
        model.buscados = result;
        ciudadO = model.buscados[0];
        ciudadD = model.buscados[1];
    });

    var rutas = new Ruta(codigo.value, ciudadO, ciudadD, duracion.value);
    Proxy.guardar3(rutas, function (result) {});
}

function doSubmitVuelos() {
    var codigo = document.getElementById("codigo_vuelo");
    var codigo1 = document.getElementById("codigo_ruta");
    var codigo2 = document.getElementById("codigo_avion");
    var salida = document.getElementById("salida");
    var horaS = document.getElementById("horaS");
    var horaL = document.getElementById("horaL");
    var precio = document.getElementById("precio");
    var ruta;
    var avion;

    Proxy.getRuta(codigo1.value, function (result) {
        model.buscados = result;
        ruta = model.buscados[0];
    });

    Proxy.getAvion(codigo2.value, function (result) {
        model.buscados = result;
        avion = model.buscados[0];
    });

    var vuelos = new Vuelo(codigo.value, salida.value, horaS.value, horaL.value, ruta, avion, precio.value);
    Proxy.guardar4(vuelos, function (result) {});
}

// ------------------------------- ACTUALIZAR DATOS DEL PERFIL DE USUARIO CLIENTE -------------------------------
function doPerfil1(){
    var user = document.getElementById("usuario");
    var contraseña = document.getElementById("contraseña");
    var cedula = document.getElementById("cedula");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellidos");
    var correo = document.getElementById("correo");
    var telefono = document.getElementById("telefono");
    var celular = document.getElementById("celular");

    usuario = new Usuario(user.value, cedula.value, nombre.value, apellido.value, correo.value, telefono.value, celular.value, "1996-11-08", contraseña.value);
    var formulario = document.getElementById("formulario");
    if (formulario != null) {
        formulario.addEventListener("submit", doValidate);
        Proxy.perfil1(usuario, function (result) {
        });
    }
}
// ------------------------------- ACTUALIZAR DATOS DEL PERFIL DE USUARIO ADMINISTRADOR -------------------------
function doPerfil2(){
    var user = document.getElementById("usuario");
    var contraseña = document.getElementById("contraseña");
    var cedula = document.getElementById("cedula");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellidos");
    var correo = document.getElementById("correo");
    var telefono = document.getElementById("telefono");
    var celular = document.getElementById("celular");

    usuario = new Usuario(user.value, cedula.value, nombre.value, apellido.value, correo.value, telefono.value, celular.value, "1996-11-08", contraseña.value);
    var formulario = document.getElementById("formulario");
    if (formulario != null) {
        formulario.addEventListener("submit", doValidate);
        Proxy.perfil2(usuario, function (result) {
        });
    }
}

function listAvion(listado, av) {
    var tr = document.createElement("tr");
    var td;
    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.codigo_avion));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.cant_asiento_fila));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.cant_filas));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.cant_pasajeros));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.marca));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.modelo));
    tr.appendChild(td);

    listado.appendChild(tr);

}

function listAviones(ps) {
    var listado = document.getElementById("listado");
    listado.innerHTML = "";
    for (i = 0; i < ps.length; i++) {
        listAvion(listado, ps[i]);
    }
}

function llenarAviones() {
    listAviones(model.buscados);
}
/*------------------------------------------------------------------------*/
function listCiudad(listado, av) {
    var tr = document.createElement("tr");
    var td;
    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.codigo_ciudad));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.nombre));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.pais));
    tr.appendChild(td);

    listado.appendChild(tr);

}

function listCiudades(ps) {
    var listado = document.getElementById("listado");
    listado.innerHTML = "";
    for (i = 0; i < ps.length; i++) {
        listCiudad(listado, ps[i]);
    }
}

function llenarCiudades() {
    listCiudades(model.buscados);
}

/*------------------------------------------------------------------------*/
function listRuta(listado, av) {
    var tr = document.createElement("tr");
    var td;
    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.codigo_ruta));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.ciudadO.codigo_ciudad));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.ciudadD.codigo_ciudad));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.duracion));
    tr.appendChild(td);

    listado.appendChild(tr);

}

function listRutas(ps) {
    var listado = document.getElementById("listado");
    listado.innerHTML = "";
    for (i = 0; i < ps.length; i++) {
        listRuta(listado, ps[i]);
    }
}

function llenarRutas() {
    listRutas(model.buscados);
}

/*----------------------------------------------------------------*/
function listVuelo(listado, av) {
    var tr = document.createElement("tr");
    var td;
    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.codigo_vuelo));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.dia_salida));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.hora_salida));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.hora_llegada));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.ruta.codigo_ruta));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.avion.codigo_avion));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.precio));
    tr.appendChild(td);
    listado.appendChild(tr);

}

function listVuelos(ps) {
    var listado = document.getElementById("listado");
    listado.innerHTML = "";
    for (i = 0; i < ps.length; i++) {
        listVuelo(listado, ps[i]);
    }
}

function llenarVuelos() {
    listVuelos(model.buscados);
}

/* ------------------------------------------------------------------- */
/* ---------------------------    MAPA   ----------------------------- */
/* ------------------------------------------------------------------- */

function getLocation() {
	if (navigator.geolocation) {
		if (navigator.geolocation.getCurrentPosition(controller.saveGeolocation));
	}
}

function positionGeoMarker(coordenates) {
	mapProp = {
		center: new google.maps.LatLng(coordenates.lat, coordenates.lng),
		zoom: 10,
	};
	var marker = new google.maps.Marker({
		position: mapProp.center,
		map: map
	});
	markers.push(marker);
}

function myMap() {
	mapProp = {
		center: new google.maps.LatLng(10.0000000, -84.0000000),
		zoom: 7
	};
	map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

	// This event listener will call addMarker() when the map is clicked.
	map.addListener('click', function (event) {
		addMarker(event.latLng);
	});

}

// Adds a marker to the map and push to the array.
function addMarker(location) {
	deleteMarkers();
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});
	markers.push(marker);
	controller.savePosition();
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(map);
	}
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
	setMapOnAll(null);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
	clearMarkers();
	markers = [];
}

/* ------------------------------------------------------------------- */
/* ------------------------------------------------------------------- */
/* ------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", pageLoad);