
	var elemento = document.createElement("img");
	elemento.src='img/Descuentos.jpg';
	elemento.class='img-responsive';
	elemento.alt='';
	var actual = document.getElementById("div01");
	actual.appendChild(elemento);
	var elemento1 = document.createElement("div");
	elemento1.class='carousel-caption hidden-xs hidden-sm';
	var elemento2 = document.createElement("h3");
	elemento2.class='carousel-caption hidden-xs hidden-sm';
	elemento2.innerHTML = 'Nuestras rutas con descuento';
	elemento1.appendChild(elemento2);
	