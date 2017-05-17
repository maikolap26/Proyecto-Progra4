<%-- 
    Document   : Cousine
    Created on : 17-may-2017, 10:35:59
    Author     : ACS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
	<title>Cousine a bordo</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="css/estilo1.css" rel="stylesheet" type="text/css" />
	<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
	<script src="js/script.js" type="text/javascript"></script>

	<link href="css/normalize.css" rel="stylesheet" type="text/css" />
	<link href="css/datepicker.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui-1.8.18.custom.min.js"></script>
	<script src="js/funcionesJQuery.js" type="text/javascript"></script>
		<script src="js/Metodos.js" type="text/javascript"></script>
	<script src="js/Usuario.js" type="text/javascript"></script>
</head>

<body class="pagina">

	<!------------------------------- ENCABEZADO ------------------------------->

	<div class="container-fluid">
		<div class="row encabezado">
			<div class="col-md-12">
				<img src="img/Captura.PNG" class="image1" alt="" style="float:left;">
				<img src="img/Header.PNG" class="image" alt="" style="float:left;">
				<span class="inicioSesion" id="inicioSesion"><span class="campoUs1"> Usuario:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input  class="campoUs" type="text" id="user" > <br> Contraseña: <input type="text" class="campoUs" id="pass"></span>
				<div> <br> <span class="boton1"> <input type="button" value="Login" class="boton" id="login"> &nbsp;&nbsp; <input type="button" id="signup" value="SignUp" class="boton">  </span>
				</div>
				</span>
				<span class="logueado" id="logueado"> <span id="span"></span> 	</span>
			</div>
		</div>
	</div>

	<!------------------------------- TERMINA ENCABEZADO ------------------------------->

	<!------------------------------- NAVEGACION ------------------------------->

	<div class="menuP">
		<ul class="MyMenu">
			<li>
				<a href="PaginaPrincipal.jsp" title="Inicio">
					<image src="" border="0">Inicio</a>
			</li>
			<li>
				<a href="QuienesSomos.jsp" title="Quienes Somos">
					<image src="" border="0">Quienes somos</a>
			</li>
			<li>
				<a href="" title="Cousine a bordo">
					<image src="" border="0">Cousine a bordo</a>
			</li>
			<li>
				<a href="ExperienciaABordo.jsp" title="Experiencia">
					<image src="" border="0">Experiencia</a>
			</li>
			<li>
				<a href="Consultas.jsp" title="Consultas">
					<image src="" border="0">Consultas</a>
			</li>
		</ul>
	</div>

	<!------------------------------- TERMINA NAVEGACION ------------------------------->

	<!------------------------------- CUERPO ------------------------------->
	<div class="servicio">
		<table>
			<tr>
				<td colspan="2" id="Negrita">
					CUISINE A BORDO
				</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td colspan="2" id="Negrita">
					<p> Un equipo culinario all-star</p> <br>
				</td>
			</tr>
			<tr>
				<td>
					<img src="img/chefs.jpg">
				</td>
			</tr>
			<tr>
				<td colspan="2">
					<br> Dos Master Chefs han sido elegidos para crear un menú único y variado para la clase primera y business. Juntos,
					emplearon meses para adaptar <br> y probar platos especialmente diseñandos para nuestros clientes. No se trata sólo
					de sabores y especias sino de cómo el su sabor se modifica <br> a 30.000 pies.
				</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>
					<img src="img/Tentacion.jpg">
				</td>
				<td>
					<img src="img/Muestra.jpg">
				</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>
					<p id="Negrita"> &nbsp;&nbsp; La tentación perfecta </p> <br> &nbsp;&nbsp;&nbsp;&nbsp;Una nueva era para la comida a bordo y que está
					centrada<br> &nbsp;&nbsp;&nbsp;&nbsp;en usted.Pruebe nuestra comida especialmente preparada <br> &nbsp;&nbsp;&nbsp;&nbsp;por
					chef mundialmente conocidos.<br> <br> &nbsp;&nbsp;&nbsp;&nbsp;Saboree nuestros últimos vinos servidos de forma experta.
					<br> <br> &nbsp;&nbsp;&nbsp;&nbsp;Nuestro menú a la carta le permitirá disfrutar de nuestros <br> &nbsp;&nbsp;&nbsp;&nbsp;platos
					cuando quiera. <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;Cada asiento dispone de gran espacio para disfrutar una cena <br> &nbsp;&nbsp;&nbsp;&nbsp;de
					lujo. <br> <br>
				</td>
				<td>
					<p id="Negrita"> &nbsp;&nbsp; Requisitos nutricionales especiales </p> <br> &nbsp;&nbsp;&nbsp;&nbsp;Podemos adaptarnos a la mayoría de
					los requisitos nutricionales. <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;Antes de volar con nosotros, díganos cuáles son sus
					preferencias. <br> <br>
					<br><br> <br> <br>
					<br><br> <br><br>
				</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
			</tr>
		</table>
	</div>
	<!------------------------------- TERMINA CUERPO ------------------------------->

	<br>
	<br>

	<!------------------------------- PIE DE PAGINA ------------------------------->

	<div class="container_pie">
		<div class="row ">
			<p class="text-center">Andres-Alex-Maikol Airlines </p>
			<p class="text-center">AAM es la marca comercial que representa a las aerolíneas latinoamericanas integradas en AAM Holdings S.A.</p>
			<p class="text-center">Contáctenos a los numeros: </p>
			<p class="text-center">(506): 8326-7394</p>
			<p class="text-center">(506): 8501-6092</p>
			<p class="text-center">(506): 8739-0871</p>
			<p class="text-center">Correo electronico: atencionAlCliente@aam.com </p>
		</div>
	</div>

	<br>

	<div class="container_pie" id="pie">
		<div class="row">
			<p class="text-center">Derechos Reservados © · AAM Airlines · 2017</p>
		</div>
	</div>

	<!------------------------------- TERMINA PIE DE PAGINA ------------------------------->

	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script src="js/bootstrap.min.js" type="text/javascript"></script>
	<link href="css/normalize.css" rel="stylesheet" type="text/css" />
	<link href="css/datepicker.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui-1.8.18.custom.min.js"></script>
	<script src="js/funcionesJQuery.js" type="text/javascript"></script>

</body>
<script src="js/scriptImagenes.js" type="text/javascript"></script>

</html>