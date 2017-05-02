StorageUsuario = {
store : function (id, object){
			return localStorage.setItem(id, JSON.stringify(object,this.replacer));
		},

retrieve: function (id){
			  var jsonObject = localStorage.getItem(id);
			  if(jsonObject === null){
				return null;
			  }
			  else{
				 var javaScriptObject = JSON.parse(jsonObject,this.revive);
				 return javaScriptObject;
			  }
		},

revive: function (k,v) {
		if (v instanceof Object && v._class == 'Usuario') {
			return new Usuario(cedula,usuario,contraseña,nombre,apellidos,email,telefono,celular,fecha);
		}
		return v;
	},

replacer: function (k,v) {
		if (v instanceof Usuario) {
			v._class="Usuario";
		}
		return v;
	}
};

