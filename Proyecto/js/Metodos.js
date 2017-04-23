var usuario;
var usuarios;
function pageLoad() {
    var btn = document.getElementById("login");
    var btn1=document.getElementById("signup");
    var campoUs = document.getElementById("user");
    var campoPass = document.getElementById("pass");
    btn.addEventListener("click", inicioSesion);
    btn1.addEventListener("click",redireccionar);
    campoUs.addEventListener("focus", doFocus);
    campoUs.addEventListener("blur", doBlur);
    pass.addEventListener("focus", doFocus);
    pass.addEventListener("blur", doBlur);
    
}

function doFocus(event) {
    event.target.className = "focus";
}
function doBlur(event) {
    event.target.className = "nofocus";
}
function redireccionar(){
    location="Registro.html";
}

function inicioSesion() {
    var us = document.getElementById("user");
    usuario = new Usuario("maikolap26");
    if (us.value == usuario.usuario) {
        var clase = document.getElementById("inicioSesion");
        var clase1 = document.getElementById("logueado");
        clase.className = "logueado";
        clase1.className = "inicioSesion";
        var sp=document.getElementById("span");
        var p = document.createElement("p");
        var a= document.createElement("a");
        a.className="anchor";
        a.appendChild(document.createTextNode(usuario.usuario));
        p.appendChild(a);
        sp.appendChild(p);
        
    }

}


document.addEventListener("DOMContentLoaded", pageLoad);