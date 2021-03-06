<%-- 
    Document   : Rutas
    Created on : 19-may-2017, 17:26:42
    Author     : ACS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>
            Rutas
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
                            <a href="Rutas_1.jsp" title="Nuevo Ingreso">
                                <image border="0" src="">
                                Nuevo Ingreso
                                </image>
                            </a>
                        </li>
                        <li>
                            <a href="Rutas_2.jsp" title="Administrar">
                                <image border="0" src="">
                                Administrar
                                </image>
                            </a>
                        </li>               
                    </ul>
                </div>

                <!-- ---------------------- CUERPO ---------------------------- -->

                <div style="display: block" class="administracion" id="tablaBusqueda">
                <table border=2 class="admi2">
                    <thead>
                        <tr>
                            <th> &nbsp;&nbsp;Código Ruta&nbsp;&nbsp; </th> 
                            <th> &nbsp;&nbsp;Ciudad Origen&nbsp;&nbsp; </th>
                            <th> &nbsp;&nbsp;Ciudad Destino&nbsp;&nbsp; </th>
                            <th> &nbsp;&nbsp;Duración&nbsp;&nbsp; </th>
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
