StorageRuta = {
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
		if (v instanceof Object && v._class == 'Ruta') {
			return new Ruta(codigo_Ruta,codigo_AeropuertoOrigen,codigo_AeropuertoDestino);
		}
		return v;
	},

replacer: function (k,v) {
		if (v instanceof Ruta) {
			v._class="Ruta";
		}
		return v;
	}
};

