<%-- 
    Document   : QuienesSomos
    Created on : 17-may-2017, 10:36:39
    Author     : ACS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
	<title>Quienes Somos</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="css/estilo1.css" rel="stylesheet" type="text/css" />
	<script src="js/Metodos.js" type="text/javascript"></script>
	<script src="js/Usuario.js" type="text/javascript"></script>
</head>

<body class="pagina">

	 <!-- ---------------------- ENCABEZADO ----------------------- -->
            <div class="container-fluid">
                <div class="row encabezado">
                    <div class="col-md-12">
                        <img alt="" class="image1" src="img/Captura.PNG" style="float:left;">
                            <img alt="" class="image" src="img/Header.PNG" style="float:left;">
                                <span class="inicioSesion" id="inicioSesion">
                                    <span class="campoUs1">
                                        Usuario: &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input class="campoUs" id="user" type="text">
                                            <br>
                                                Contraseña:
                                                <input class="campoUs" id="pass" type="text"/>
                                            </br>
                                        </input>
                                    </span>
                                    <div>
                                        <br>
                                            <span class="boton1">
                                                <input class="boton" id="login" type="button" value="Login">
                                                    <input class="boton" id="signup" type="button" value="SignUp">
                                                    </input>
                                                </input>
                                            </span>
                                        </br>
                                    </div>
                                </span>
                                <span class="logueado" id="logueado">
                                    <span id="span">
                                    </span>
                                </span>
                            </img>
                        </img>
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
				<a href="" title="Quienes Somos">
					<image src="" border="0">Quienes somos</a>
			</li>
			<li>
				<a href="Cousine.jsp" title="Cousine a bordo">
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
	<div class="container_cuerpo">
		<div class="row" id="fondo">
			<div id="fondo">
				<h4 id="Negrita">His​toria Corp​orativa</h4>
			</div>
			<div id="fondo">
				<img src="img/plane.jpg" class="image2" alt="">
			</div>

			<div id="fondo">
				<br><br>
				<p>AAM es la marca comercial que representa a las aerolíneas latinoamericanas integradas en AAM Holdings S.A. Nuestro equipo
					humano integrado por más de 20.000 colaboradores <br> ha sido destacado por su excelencia en el servicio. Con las aerolíneas
					AAM, especializadas en el transporte de pasajeros y carga, atendemos en forma directa más de 500 destinos <br> al rededor
					del mundo a bordo de una moderna flota de corto, mediano y largo alcance. ​</p>
			</div>

			<div id="fondo">
				<br>
				<p>A través de nuestra membresía con Star Alliance​, ofrecemos conectividad a más de 1.300 destinos en 192 países de los
					cinco continentes. Nuestro programa de lealtad LifeMiles <br> cuenta con más de 6 millones de socios, que día a día disfrutan
					de los múltiples beneficios y ventajas exclusivas que ofrece este esquema de fidelidad.</p>
			</div>
			<div id="fondo">
				<br>
				<div id="fondo">
					<p id="Negrita">
						Mision
					</p>
				</div>
				<div id="fondo">
					<p>Conectamos al mundo con Latinoamérica, buscando dar siempre más.</p>
				</div>
				<div id="fondo">
					<p id="Negrita">
						Vision
					</p>
				</div>
				<div id="fondo">
					<p>Con la mejor gente y tecnología para una experiencia excepcional, seremos la aerolínea latinoamericana preferida en
						el mundo.</p>
				</div>
				<div id="fondo">
					<p id="Negrita">
						Valores
					</p>
				</div>
				<div id="fondo">
					<p>&nbsp;&nbsp;&nbsp;&nbsp; * Vivimos la seguridad. </p>
				</div>
				<div id="fondo">
					<p>&nbsp;&nbsp;&nbsp;&nbsp; * Somos integros. </p>
				</div>
				<div id="fondo">
					<p>&nbsp;&nbsp;&nbsp;&nbsp; * Servimos con pasión. </p>
				</div>
				<div id="fondo">
					<p>&nbsp;&nbsp;&nbsp;&nbsp; * Trabajamos felices. </p>
				</div>
				<div id="fondo">
					<p>​&nbsp;&nbsp;&nbsp;&nbsp; * Creamos impacto sostenible. </p>
				</div>

			</div>

		</div>

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
</body>

</html>