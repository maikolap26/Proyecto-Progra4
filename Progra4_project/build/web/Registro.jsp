<%-- 
    Document   : Registro
    Created on : 17-may-2017, 10:36:51
    Author     : ACS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Registro</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
		<link href="css/estilo1.css" rel="stylesheet" type="text/css"/>
        <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="js/script.js" type="text/javascript"></script>
		<script src="js/Metodos.js" type="text/javascript"></script>
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
						<li><a href="PaginaPrincipal.jsp" title="Inicio"> <image src="" border="0">Inicio</a></li>
						<li><a href="QuienesSomos.jsp" title="Quienes Somos" ><image src="" border="0">Quienes somos</a></li>
						<li><a href="Cousine.jsp" title="Cousine a bordo" > <image src="" border="0">Cousine a bordo</a></li>
						<li><a href="ExperienciaABordo.jsp" title="Experiencia" > <image src="" border="0">Experiencia</a></li>
						<li><a href="Consultas.jsp" title="Consultas" > <image src="" border="0">Consultas</a></li>
			</ul>
        </div>
		
        <!------------------------------- TERMINA NAVEGACION ------------------------------->
    
	<div>
		<span class="iz">
    <!------------------------------- CUERPO ------------------------------->
			<div class="container cuerpo" >
				<form class="formulario" method="POST" name="formulario" id="formulario" action="javascript:doSubmit();">
					<table class="grid">
						<thead>
							<tr>
								<th colspan="6">Sign up</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>&nbsp;&nbsp;</td>
							</tr>
							<tr>
								<td class="etiqueta"> &nbsp;&nbsp; Usuario: </td>
								<td> <input type="text" id="usuario"></td>
								<td>&nbsp;&nbsp;</td>
								<td class="etiqueta">  Email: </td>
								<td> <input type="text" id="correo"></td>
								<td>&nbsp;&nbsp;</td>
							</tr>
							<tr>
								<td>&nbsp;&nbsp;</td>
							</tr>
							<tr>
								<td class="etiqueta"> &nbsp;&nbsp;Contraseña: </td>
								<td> <input type="password" id="contraseña"></td>
								<td>&nbsp;&nbsp;</td>
								<td class="etiqueta"> Confirmar contraseña: </td>
								<td> <input type="password" id="contraseña"></td>
								<td>&nbsp;&nbsp;</td>
							</tr>
							<tr>
								<td>&nbsp;&nbsp;</td>
							</tr>
							<tr>
								<td class="etiqueta"> &nbsp;&nbsp; Nombre:</td>
								<td> <input type="text" id="nombre"></td>
								<td>&nbsp;&nbsp;</td>
								<td class="etiqueta"> Apellido:</td>
								<td> <input type="text" id="apellidos"></td>
								<td>&nbsp;&nbsp;</td>
							</tr>
							<tr>
								<td>&nbsp;&nbsp;</td>
							</tr>
							<tr>
								<td class="etiqueta"> &nbsp;&nbsp; Cédula:</td>
								<td> <input type="text" id="cedula"></td>
								<td>&nbsp;&nbsp;</td>
								<td class="etiqueta"> Teléfono1:</td>
								<td> <input type="text" id="telefono"></td>
								<td>&nbsp;&nbsp;</td>
							</tr>
							<tr>
								<td>&nbsp;&nbsp;</td>
							</tr>
							<tr>
								<td class="etiqueta"> &nbsp;&nbsp; Teléfono2: </td>
								<td> <input type="text" id="celular"></td>
								<td>&nbsp;&nbsp;</td>
								<td class="etiqueta"> Fecha de nacimiento: </td>
								<td> <input type="text" id="fechaNacimiento">&nbsp;&nbsp;</td>
								<td>&nbsp;&nbsp;</td>
							</tr>
							<tr>
								<td>&nbsp;&nbsp;</td>
							</tr>
							<tr>
								<td colspan="6">&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" class="boton" value="Registrar" id="registrar"> </td>
							</tr>
							<tr>
								<td>&nbsp;&nbsp;</td>
							</tr>
						</tbody>
					</table>
				</form>
			</div>
		</span>		
	</div>
   
    <!------------------------------- TERMINA CUERPO ------------------------------->

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