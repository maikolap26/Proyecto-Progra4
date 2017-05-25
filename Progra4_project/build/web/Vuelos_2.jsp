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
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <link href="css/boots	trap.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/estilo1.css" rel="stylesheet" type="text/css"/>
        <script src="https://code.jquery.com/jquery-1.10.2.js">
        </script>
        <script src="js/script.js" type="text/javascript">
        </script>
        <link href="css/normalize.css" rel="stylesheet" type="text/css"/>
        <link href="css/datepicker.css" rel="stylesheet" type="text/css"/>
        <script src="js/jquery-1.7.1.min.js" type="text/javascript">
        </script>
        <script src="js/jquery-ui-1.8.18.custom.min.js" type="text/javascript">
        </script>
        <script src="js/Avion.js" type="text/javascript">
        </script>
        <script src="js/funcionesJQuery.js" type="text/javascript">
        </script>
        <script src="js/Ciudad.js" type="text/javascript">
        </script>
        <script src="js/Vuelo.js" type="text/javascript">
        </script>
        <script src="js/Ruta.js" type="text/javascript">
        </script>
        <script src="js/Tiquete.js" type="text/javascript">
        </script>
        <script src="js/Usuario.js" type="text/javascript">
        </script>
        <script src="js/Proxy.js" type="text/javascript">
        </script>
        <script src="js/JsonUtils.js" type="text/javascript">
        </script>
        <script src="js/PP-Vista.js" type="text/javascript">
        </script>
        <script src="js/PP-Controlador.js" type="text/javascript">
        </script>
        <script src="js/PP-Modelo.js" type="text/javascript">
        </script>

        </meta>
        </meta>
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
            <div class="container_pie">
                <div class="row ">
                    <p class="text-center">
                        Andres-Alex-Maikol Airlines
                    </p>
                    <p class="text-center">
                        AAM es la marca comercial que representa a las aerolíneas latinoamericanas integradas en AAM Holdings S.A.
                    </p>
                    <p class="text-center">
                        Contáctenos a los numeros:
                    </p>
                    <p class="text-center">
                        (506): 8326-7394
                    </p>
                    <p class="text-center">
                        (506): 8501-6092
                    </p>
                    <p class="text-center">
                        (506): 8739-0871
                    </p>
                    <p class="text-center">
                        Correo electronico: atencionAlCliente@aam.com
                    </p>
                </div>
            </div>
            <br>
            <div class="container_pie" id="pie">
                <div class="row">
                    <p class="text-center">
                        Derechos Reservados © · AAM Airlines · 2017
                    </p>
                </div>
            </div>
            </br>
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
