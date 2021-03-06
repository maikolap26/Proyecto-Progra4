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
        <script src="js/Ciudad.js" type="text/javascript"></script>
        <script src="js/Ruta.js" type="text/javascript"></script>
        <script src="js/Avion.js" type="text/javascript"></script>
        <script src="js/Vuelo.js" type="text/javascript"></script>
        <script src="js/Usuario.js" type="text/javascript"></script>
        <script src="js/Metodos.js" type="text/javascript"></script>
        <script src="js/PP-Vista.js" type="text/javascript"></script>
        <script src="js/PP-Modelo.js" type="text/javascript"></script>
        <script src="js/PP-Controlador.js" type="text/javascript"></script>
        <script src="js/Proxy.js" type="text/javascript"></script>
        <script src="js/JsonUtils.js" type="text/javascript"></script>
        <script src="js/Usuario.js" type="text/javascript"></script>
        <script src="js/Login.js" type="text/javascript"></script>

       
        <%@ include file="include.jspf" %>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDvv3hZ7Hc3_qD2r1o8ltYxQ7rEGkSmxPA&callback=myMap"></script> 
        <!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBacqOt9JhJHdDa2ttf3mCgLyor01XJ5HQ&callback=myMap"></script> -->
    </head>
    <body class="pagina">

        <!------------------------------- ENCABEZADO ------------------------------->

        <%@ include file="Header.jspf" %>
                   
        <input type="submit" class="boton" value="VER MAPA" id="registrar" onclick="myMap()">        
        
        <!------------------------------- TERMINA ENCABEZADO ------------------------------->
        
        <div>
            <span class="iz">
                <!------------------------------- CUERPO ------------------------------->
                <div class="container cuerpo" >
                    <%String s= (String) request.getSession().getAttribute("error");%>
                    <%if(s != null){%>
                       <!--<div script="window.alert('ERROR');"> <h1 style="color: red;text-align: center;">Error de registro</h1> </div>-->
                       <script type="text/javascript">
                            //location="Registro.jsp";
                        window.alert("Error de registro"); </script>
                    <%}%>
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
                                    <td> <input type="password" id="contraseña1"></td>
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
                                <tr class="local">
                                    <td colspan="6" class="local" id="local">LOCALIZACION</td>
                                </tr>  
                                <tr rowspan="6">
                                    <td colspan="6">
                                             <div id="googleMap" style="width:100%;height:400px;"></div>                                  
                                    </td>
                                </tr>                                      
                                
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="6">&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" class="boton" value="Registrar" id="registrar"> </td>
                                </tr>
                            </tfoot>>
                        </table>
                    </form>
                </div>
            </span>	            
        </div>
        
                   
        <!------------------------------- TERMINA CUERPO ------------------------------->

        <!-- ---------------------- PIE DE PAGINA ---------------------- -->

        <%@ include file="Footer.jspf" %>

        <!------------------------------- TERMINA PIE DE PAGINA ------------------------------->
        <script>
        function myMap() {
                var mapProp= {
                        center:new google.maps.LatLng(10.0000000,-84.0000000),
                        zoom:7,
                };
                var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
        }
        </script>
        <script src="http://code.jquery.com/jquery-latest.js"></script>
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
    </body>

</html>