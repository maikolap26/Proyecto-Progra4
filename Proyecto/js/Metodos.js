var usuario;
var usuarios;
function pageLoad() {
    var btn = document.getElementById("login");
    var btn1=document.getElementById("signup");
    var campoUs = document.getElementById("user");
    var campoPass = document.getElementById("pass");
    var formulario= document.getElementById("formulario");
    btn.addEventListener("click", inicioSesion);
    btn1.addEventListener("click",redireccionar);
    campoUs.addEventListener("focus", doFocus);
    campoUs.addEventListener("blur", doBlur);
    pass.addEventListener("focus", doFocus);
    pass.addEventListener("blur", doBlur);
    formulario.addEventListener("submit",doValidate);
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
		var ul=document.createElement("a");
		var li=document.createElement("li");
		li.appendChild(document.createTextNode("Cerrar Sesión"));
		li.className="cerrar";
        a.className="anchor";
        a.appendChild(document.createTextNode(usuario.usuario));
		a.appendChild(li);
        p.appendChild(a);
		ul.appendChild(p);
        sp.appendChild(ul);
        
    }

}

function doValidate(){
    var user=document.getElementById("usuario");
    var contraseña=document.getElementById("contraseña");
    var cedula=document.getElementById("cedula");
    var nombre=document.getElementById("nombre");
    var apellido=document.getElementById("apellidos");
    var correo=document.getElementById("correo");
    var telefono=document.getElementById("telefono");
    var celular=document.getElementById("celular");
    var fecha=document.getElementById("fechaNacimiento");
    var error=false;
    
    if(user != null){
		if(user.value == ""){
			error=true;
			user.className="error";
		}
	}	
    
    if(contraseña != null){
		if(contraseña.value == ""){
			error=true;
			contraseña.className="error";
		}
	}
    
    if(cedula != null){
		if(cedula.value == ""){
			error=true;
			cedula.className="error";
		}
	}
    
    if(nombre != null){
		if(nombre.value == ""){
			error=true;
			nombre.className="error";
		}
	}
    
    if(apellido != null){
		if(apellido.value == ""){
			error=true;
			apellido.className="error";
		}
	}
    
    if(correo != null){
		if(correo.value == ""){
			error=true;
			correo.className="error";
		}
	}
    
    if(telefono != null){
		if(telefono.value == ""){
			error=true;
			telefono.className="error";
		}
	}
    
    if(celular != null){
		if(celular.value == ""){
			error=true;
			celular.className="error";
		}
	}
    
    if(fecha != null){
		if(fecha.value == ""){
			error=true;
			fecha.className="error";
		}
	}
    
    if(error == true){
		event.preventDefault();
	}
    
}

function doSubmit(){
	var user=document.getElementById("usuario");
    var contraseña=document.getElementById("contraseña");
    var cedula=document.getElementById("cedula");
    var nombre=document.getElementById("nombre");
    var apellido=document.getElementById("apellidos");
    var correo=document.getElementById("correo");
    var telefono=document.getElementById("telefono");
    var celular=document.getElementById("celular");
    var fecha=document.getElementById("fechaNacimiento");
	
	usuario= new Usuario(cedula.value,user.value,contraseña.value,nombre.value,apellido.value,correo.value,telefono.value,celular.value,fecha.value);
	
	var formulario= document.getElementById("formulario");
	usuarios.push(usuario);
	StorageUsuario.store("usuarios",usuarios);
	window.alert("Data sent: "+ usuario.usuario);
	formulario.reset();
	
}

document.addEventListener("DOMContentLoaded", pageLoad);