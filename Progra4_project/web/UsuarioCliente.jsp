<%-- 
    Document   : QuienesSomos
    Created on : 17-may-2017, 10:36:39
    Author     : ACS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.*" session="true" %>  
<%     HttpSession sesion = request.getSession(true);      %>

<!DOCTYPE html>
<html>

<head>
	<title>Perfil</title>
	
        <%@ include file="include.jspf" %>
        
</head>

<body class="pagina">

	<!------------------------------- ENCABEZADO ------------------------------->
        
        <%@ include file="Header.jspf" %>

        <div>
            <span class="iz">
                <!------------------------------- CUERPO ------------------------------->
                <div class="container cuerpo" >
                    <form class="formulario" method="POST" name="formulario" id="formulario" action="javascript:doPerfil1();">
                        <table class="grid">
                            <thead>
                                <tr>
                                    <th colspan="6">INFORMACION DEL USUARIO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="etiqueta"> &nbsp;&nbsp; Usuario: </td>
                                    <td> <input type="text" id="usuario" value="<% out.print(sesion.getAttribute("usuario")); %>" disabled></td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td class="etiqueta">  Email: </td>
                                    <td> <input type="text" id="correo" value="<% out.print(sesion.getAttribute("email")); %>" disabled></td>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="etiqueta"> &nbsp;&nbsp;Contraseña: </td>
                                    <td> <input type="password" id="contraseña" value="<% out.print(sesion.getAttribute("cont1")); %>" disabled></td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td class="etiqueta"> Confirmar contraseña: </td>
                                    <td> <input type="password" id="contraseña1" disabled></td>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="etiqueta"> &nbsp;&nbsp; Nombre:</td>
                                    <td> <input type="text" id="nombre" value="<% out.print(sesion.getAttribute("nombre")); %>" disabled></td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td class="etiqueta"> Apellido:</td>
                                    <td> <input type="text" id="apellidos" value="<% out.print(sesion.getAttribute("apellido")); %>" disabled></td>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="etiqueta"> &nbsp;&nbsp; Cédula:</td>
                                    <td> <input type="text" id="cedula" value="<% out.print(sesion.getAttribute("cedula")); %>" disabled></td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td class="etiqueta"> Teléfono1:</td>
                                    <td> <input type="text" id="telefono" value="<% out.print(sesion.getAttribute("telefono")); %>" disabled></td>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="etiqueta"> &nbsp;&nbsp; Celular: </td>
                                    <td> <input type="text" id="celular" value="<% out.print(sesion.getAttribute("celular")); %>" disabled></td>
                                    <td>&nbsp;&nbsp;</td>
                                    
                                </tr>
                                <tr>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td colspan="6">&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" class="boton" value="ACTUALIZAR" id="registrar"> <input type="button" class="boton" value="EDITAR" id="registrar" onclick="enableInput()"></td>
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
	
        

        <!-- ---------------------- PIE DE PAGINA ---------------------- -->

        <%@ include file="Footer.jspf" %>

	<!------------------------------- TERMINA PIE DE PAGINA ------------------------------->

	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script src="js/bootstrap.min.js" type="text/javascript"></script>
</body>

</html>
