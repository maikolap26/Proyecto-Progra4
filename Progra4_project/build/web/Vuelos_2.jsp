<%-- 
    Document   : Vuelos
    Created on : 19-may-2017, 17:26:50
    Author     : ACS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>
            Vuelos
        </title>
        
        <%@ include file="include.jspf" %>
        
    </head>
    <body>
        <!-- ------------------------ Cuerpo de la pagina ------------------ -->
        <div class="pagina" id="cuerpo">
            <!-- ---------------------- ENCABEZADO ------------------------- -->
            <%@ include file="AdminMenu.jspf" %>
            
            <div class="SubAdmin">
                <ul class="MyMenuSubAdmi">
                    <li>
                        <a href="Vuelos_1.jsp" title="Nuevo Ingreso">
                            <image border="0" src="">
                            Nuevo Ingreso
                            </image>
                        </a>
                    </li>
                    <li>
                        <a href="Vuelos_2.jsp" title="Administrar">
                            <image border="0" src="">
                            Administrar
                            </image>
                        </a>
                    </li>               
                </ul>
            </div>
            
            <!-- ---------------------- CUERPO ---------------------------- -->
            
            <div style="display: block" class="administracion" id="tablaBusqueda">
                <table border=2 class="admi3">
                    <thead>
                        <tr>
                            <th> &nbsp;&nbsp;Código Vuelo&nbsp;&nbsp; </th> 
                            <th> &nbsp;&nbsp;Día Salida&nbsp;&nbsp; </th>
                            <th> &nbsp;&nbsp;Hora Salida&nbsp;&nbsp; </th>
                            <th> &nbsp;&nbsp;Hora Llegada&nbsp;&nbsp; </th>
                            <th> &nbsp;&nbsp;Ruta&nbsp;&nbsp; </th>
                            <th> &nbsp;&nbsp;Avion&nbsp;&nbsp; </th>
                            <th> &nbsp;&nbsp;Precio&nbsp;&nbsp; </th>
                        </tr>
                    </thead>
                    <tbody id="listado"> </tbody>

                </table>
            </div>
                 
            <!-- ---------------------- PIE DE PAGINA ---------------------- -->

            <%@ include file="Footer.jspf" %>
            
        </div>
       
        <script src="http://code.jquery.com/jquery-latest.js">
        </script>
        <script src="js/bootstrap.min.js" type="text/javascript">
        </script>
        <link href="css/normalize.css" rel="stylesheet" type="text/css"/>
        <link href="css/datepicker.css" rel="stylesheet" type="text/css"/>
        <script src="js/jquery-1.7.1.min.js" type="text/javascript">
        </script>
        <script src="js/jquery-ui-1.8.18.custom.min.js" type="text/javascript">
        </script>
        <script src="js/funcionesJQuery.js" type="text/javascript">
        </script>
    </body>

</html>
