var model;
var controller;
var vuelos;
var ciudades;
var usuario;
var usuarios;

function pageLoad(event) {
    model = new AAMModel();
    vuelos = model.vuelos;
    ciudades = model.ciudades;
    controller = new AAMController(model, window);
    //llenarSelects();
    //document.getElementById("buscar").addEventListener("click",controller.buscar());
    $("#buscar").click(function(){controller.buscar();});
    document.getElementById("cancelOrder").addEventListener("click", cancelOrden);
    document.getElementById("goTi").disabled = false;
    document.getElementById("goTi").addEventListener("click", goAsientos);
    var btn = document.getElementById("login");
    var btn1 = document.getElementById("signup");
    var campoUs = document.getElementById("user");
    var campoPass = document.getElementById("pass");
    var formulario = document.getElementById("formulario");
    btn.addEventListener("click", inicioSesion);
    btn1.addEventListener("click", redireccionar);
    campoUs.addEventListener("focus", doFocus);
    campoUs.addEventListener("blur", doBlur);
    pass.addEventListener("focus", doFocus);
    pass.addEventListener("blur", doBlur);
    if(formulario != null)
    formulario.addEventListener("submit", doValidate);
    llenarDescuentos();
}

function llenarDescuentos() {              
    for (var i = 1; i < 6; i++) {
        var imagen = document.createElement("img");
        var image="img/d"+i+".jpg";
        imagen.src=image;//direccion de la imagen 
        imagen.class='img-responsive';
        imagen.name="img"+i;
        imagen.alt='';
        var id="div"+i;
        var actual = document.getElementById(id);
        actual.appendChild(imagen);           
    }
}

function llenarSelects() {
    var origen = document.getElementById("origen");
    var destino = document.getElementById("destino");
    /*Proxy.getCiudades(function (result) {
        model.buscados = result;
    });*/
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
    if (aux == null) {
        var thea = document.createElement("thead");
        var x = document.createElement("tr");
        var y = document.createElement("th");
        y.innerHTML = "Resultados de la busqueda";
        y.id = "resultBusq";
        x.appendChild(y);
        thea.appendChild(x);
        s.appendChild(thea);
    }
    var buscado = document.getElementById("buscado");
    while (s.childNodes.length > 0 && aux != null && buscado != null) {
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
        boton.id = i;
        boton.type = "button";
        boton.value = " Comprar ";
        boton.addEventListener("click", openInfo);
        t2.appendChild(boton);
        t.appendChild(t2);
        s.appendChild(t);
    }
    aux = document.getElementById("sinBusq");
    if (aux == null && model.buscados.length == 0) {
        var t = document.createElement("tr");
        t.id = "buscado";
        t.innerHTML = "Sin resultados...";
        s.appendChild(t);
    }
}

function openInfo() {
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
    document.getElementById("price").innerHTML = " $ " + model.buscados[index].precio;
}
function doFocus(event) {
    event.target.className = "focus";
}
function doBlur(event) {
    event.target.className = "nofocus";
}
function redireccionar() {
    location = "Registro.html";
}

function inicioSesion() {
    var us = document.getElementById("user");
    usuario = new Usuario("maikolap26");
    if (us.value == usuario.usuario) {
        var clase = document.getElementById("inicioSesion");
        var clase1 = document.getElementById("logueado");
        clase.className = "logueado";
        clase1.className = "inicioSesion";
        var sp = document.getElementById("span");
        var p = document.createElement("p");
        var a = document.createElement("a");
        var ul = document.createElement("a");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("Cerrar Sesión"));
        li.className = "cerrar";
        a.className = "anchor";
        a.appendChild(document.createTextNode(usuario.usuario));
        a.appendChild(li);
        p.appendChild(a);
        ul.appendChild(p);
        sp.appendChild(ul);

    }

}

function doValidate() {
    var user = document.getElementById("usuario");
    var contraseña = document.getElementById("contraseña");
    var cedula = document.getElementById("cedula");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellidos");
    var correo = document.getElementById("correo");
    var telefono = document.getElementById("telefono");
    var celular = document.getElementById("celular");
    var fecha = document.getElementById("fechaNacimiento");
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

    usuario = new Usuario(cedula.value, user.value, contraseña.value, nombre.value, apellido.value, correo.value, telefono.value, celular.value, fecha.value);

    var formulario = document.getElementById("formulario");
    usuarios.push(usuario);
    StorageUsuario.store("usuarios", usuarios);
    window.alert("Data sent: " + usuario.usuario);
    formulario.reset();

}

document.addEventListener("DOMContentLoaded", pageLoad);