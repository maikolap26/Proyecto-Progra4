        var model;
            var controller;
            var vuelos;
            var ciudades;

            function pageLoad(event) {
                model=new AAMModel();
                vuelos= model.vuelos;
                ciudades= model.ciudades;
                controller= new AAMController(model,window);
                llenarSelects();
                document.getElementById("buscar").addEventListener("click",showBuscados);
                document.getElementById("cancelOrder").addEventListener("click",cancelOrden);
                document.getElementById("goTi").disabled=false;
                document.getElementById("goTi").addEventListener("click",goAsientos);
            }

            function llenarSelects(){
                var origen= document.getElementById("origen");
                var destino= document.getElementById("destino");
                for(var i=0; i < model.ciudades.length; i++){
                    var option=document.createElement("option");
                    option.value=model.ciudades[i].nombre;
                    option.innerHTML=model.ciudades[i].nombre;
                    origen.appendChild(option); 
                }
                for(var i=0; i < model.ciudades.length; i++){
                    var option=document.createElement("option");
                    option.value=model.ciudades[i].nombre;
                    option.innerHTML=model.ciudades[i].nombre;
                    destino.appendChild(option); 
                }
            }

            function goAsientos(){
                document.getElementById("info").style.display="none";
                document.getElementById("goTi").style.color="gray";
                var avionAsi= document.getElementById("avionAsientos");
                var div1= document.createElement("div");
                var div2= document.createElement("div");
                div2.id="asientosAvion";
                div1.classList.add("divAvionAsientos");
                var imag= document.createElement("img");
                imag.src="img/avion.png";
                imag.id="imag";
                div1.appendChild(imag);
                avionAsi.appendChild(div1);
                var aux=1;
                for(var i=0; i < 11 ; i++){
                	
                	var tr= document.createElement("tr");
                	for(var j=0; j < 15; j++){
                		var td= document.createElement("td");
                		if( i == 5  ){
                			var b= document.createElement("input");
	                		b.type = "button";
	                		b.classList.add("asientoV");
	                		td.appendChild(b);
	                		tr.appendChild(td);
	                		b= document.createElement("input");
	                		b.type = "button";
	                		b.classList.add("asientoV");
	                		td.appendChild(b);
	                		tr.appendChild(td);
                		}
                		if( i == 0 ){
                			var b= document.createElement("input");
	                		b.type = "button";
	                		b.classList.add("asientoV");
	                		td.appendChild(b);
	                		tr.appendChild(td);
                		}
                		
                			var b= document.createElement("input");
	                		b.type = "button";
	                		b.value= aux;
	                		b.classList.add("asiento");
	                		td.appendChild(b);
	                		tr.appendChild(td);
	                		aux++;
                		
                		
                	}
                	div2.appendChild(tr);
                }
                avionAsi.appendChild(div2);
            }

            function cancelOrden(){
                var compra= document.getElementById("compra");
                compra.classList.remove("popupComprar");
                compra.style.display="none";
                document.getElementById("cuerpo").style.opacity=1;
            }

            function showBuscados(){
                controller.buscar();
                var s= document.getElementById("tablaBusqueda");
                var aux= document.getElementById("resultBusq");
                if(aux == null){
                    var thea= document.createElement("thead");
                    var x= document.createElement("tr");
                    var y=document.createElement("th");
                    y.innerHTML= "Resultados de la busqueda";
                    y.id="resultBusq";
                    x.appendChild(y);
                    thea.appendChild(x);
                    s.appendChild(thea);
                }
                var buscado= document.getElementById("buscado");
                while( s.childNodes.length > 0 && aux != null && buscado != null){
                    s.removeChild(buscado);
                    buscado= document.getElementById("buscado");
                }
                for(var i=0; i< model.buscados.length; i++){
                    var t= document.createElement("tr");
                    t.id="filabusq";
                    var t1= document.createElement("td");
                    t1.innerHTML=i+1 +". Desde: "+ model.buscados[i].codigo_AeropuertoOrigen+" hasta "+ model.buscados[i].codigo_AeropuertoDestino+"      $ "+ model.buscados[i].precio;
                    t.id="buscado";
                    t.appendChild(t1);
                    var t2= document.createElement("td");
                    var boton= document.createElement("input");
                    boton.id=i;
                    boton.type = "button";
                    boton.value= " Comprar ";
                    boton.addEventListener("click",openInfo);
                    t2.appendChild(boton);
                    t.appendChild(t2);
                    s.appendChild(t);
                }
                aux = document.getElementById("sinBusq");
                if(aux == null && model.buscados.length==0){
                    var t= document.createElement("tr");
                    t.id="buscado";
                    t.innerHTML="Sin resultados...";
                    s.appendChild(t);
                }
            }

            function openInfo(){
                var index= this.id;
                console.log(index);
                var compra= document.getElementById("compra");
                compra.classList.add("popupComprar");
                compra.style.display="block";
                document.getElementById("cuerpo").style.opacity=.70;
                var fecPar= document.getElementById("datepicker1").value;
                var fecLle= document.getElementById("datepicker2").value;
                document.getElementById("partida").innerHTML=fecPar;
                document.getElementById("regreso").innerHTML= fecLle;
                var ori= document.getElementById("origen").value;
                var dest= document.getElementById("destino").value;
                document.getElementById("origenC").innerHTML= ori;
                document.getElementById("destinoC").innerHTML= dest;
                document.getElementById("cantidad").innerHTML=document.getElementById("combo").value;
                document.getElementById("price").innerHTML=" $ "+model.buscados[index].precio;
            }

            document.addEventListener("DOMContentLoaded",pageLoad);