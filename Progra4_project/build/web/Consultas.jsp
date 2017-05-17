<%-- 
    Document   : Consultas
    Created on : 17-may-2017, 10:36:13
    Author     : ACS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
    <title>Consultas</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="css/estilo1.css" rel="stylesheet" type="text/css" />
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
                <a href="Cousine.jsp" title="Cousine a bordo">
                    <image src="" border="0">Cousine a bordo</a>
            </li>
            <li>
                <a href="ExperienciaABordo.jsp" title="Experiencia">
                    <image src="" border="0">Experiencia</a>
            </li>
            <li>
                <a href="" title="Consultas">
                    <image src="" border="0">Consultas</a>
            </li>
        </ul>
    </div>

    <!------------------------------- TERMINA NAVEGACION ------------------------------->

    <!------------------------------- CUERPO ------------------------------->
    <div class="container_cuerpo">
        <form id="claro">
            <div class="row" id="contactenos">
                <div class="form-group">
                    <h4 class="col-md-12" id="contactenos"> CONTÁCTENOS</h4>
                    <br>

                </div>
            </div>

            <div class="row" id="claro">
                <div class="form-group">
                    <label for="nombre" class="control-label col-md-12" id="claro">Nombre:</label>
                    <div class="col-md-5">
                        <input type="text" class="form-control" id="nombre">
                    </div>
                </div>
            </div>

            <div class="row" id="claro">
                <div class="form-group">
                    <label for="Email" class="control-label col-md-12" id="claro">Email:</label>
                    <div class="col-md-5">
                        <input type="text" class="form-control" id="Email">
                    </div>
                </div>
            </div>

            <div class="row" id="claro">
                <div class="form-group">
                    <label for="tel" class="control-label col-md-12" id="claro">Teléfono:</label>
                    <div class="col-md-5">
                        <input type="text" class="form-control" id="tel">
                    </div>
                </div>
            </div>

            <div class="row" id="claro">
                <div class="form-group">
                    <label for="ti" class="control-label col-md-12" id="claro">Titulo:</label>
                    <div class="col-md-5">
                        <input type="text" class="form-control" id="ti">
                    </div>
                </div>
            </div>

            <div class="row" id="claro">
                <div class="form-group">
                    <label for="msm" class="control-label col-md-12" id="claro">Mensaje:</label>
                    <div class="col-md-10">
                        <textarea class="form-control" id="msm" rows="10" cols="50"> </textarea>
                    </div>
                </div>
            </div>

            <div class="row" id="claro">&nbsp;</div>

            <div class="row" id="claro">
                <div class="form-group">
                    <div class="col-md-2">
                        <button class="btn btn-primary form-control ui-button ui-widget ui-corner-all" id="btn">Enviar</button>
                    </div>
                </div>
            </div>

            <div class="row" id="claro">&nbsp;</div>
            <div class="row" id="claro">&nbsp;</div>
        </form>
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