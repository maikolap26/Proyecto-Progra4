package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import AAMAirline.model.Usuario;
import AAMAirline.model.Login;

public final class Vuelos_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.ArrayList<String>(2);
    _jspx_dependants.add("/AdminMenu.jspf");
    _jspx_dependants.add("/Footer.jspf");
  }

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!DOCTYPE html>\r\n");
      out.write("<html lang=\"en\">\r\n");
      out.write("    <head>\r\n");
      out.write("        <title>\r\n");
      out.write("            Vuelos\r\n");
      out.write("        </title>\r\n");
      out.write("        <meta charset=\"utf-8\">\r\n");
      out.write("        <meta content=\"width=device-width, initial-scale=1.0\" name=\"viewport\">\r\n");
      out.write("        <link href=\"css/boots\ttrap.min.css\" rel=\"stylesheet\" type=\"text/css\"/>\r\n");
      out.write("        <link href=\"css/estilo1.css\" rel=\"stylesheet\" type=\"text/css\"/>\r\n");
      out.write("        <script src=\"https://code.jquery.com/jquery-1.10.2.js\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <script src=\"js/script.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <link href=\"css/normalize.css\" rel=\"stylesheet\" type=\"text/css\"/>\r\n");
      out.write("        <link href=\"css/datepicker.css\" rel=\"stylesheet\" type=\"text/css\"/>\r\n");
      out.write("        <script src=\"js/jquery-1.7.1.min.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <script src=\"js/jquery-ui-1.8.18.custom.min.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <script src=\"js/funcionesJQuery.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <script src=\"js/Avion.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <script src=\"js/Ciudad.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <script src=\"js/Vuelo.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <script src=\"js/Ruta.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <script src=\"js/Tiquete.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <script src=\"js/Usuario.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <script src=\"js/Proxy.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <script src=\"js/JsonUtils.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <script src=\"js/PP-Vista.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <script src=\"js/PP-Controlador.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <script src=\"js/PP-Modelo.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("\r\n");
      out.write("        </meta>\r\n");
      out.write("        </meta>\r\n");
      out.write("    </head>\r\n");
      out.write("    <body>\r\n");
      out.write("        <!-- ------------------------ Cuerpo de la pagina ------------------ -->\r\n");
      out.write("        <div class=\"pagina\" id=\"cuerpo\">\r\n");
      out.write("            <!-- ---------------------- ENCABEZADO ------------------------- -->\r\n");
      out.write("            ");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<div class=\"container-fluid\">\r\n");
      out.write("                <div class=\"row encabezado\">\r\n");
      out.write("                    <div class=\"col-md-12\">\r\n");
      out.write("                        <img alt=\"\" class=\"image1\" src=\"img/Captura.PNG\" style=\"float:left;\">\r\n");
      out.write("                        <img alt=\"\" class=\"image\" src=\"img/Header.PNG\" style=\"float:left;\">\r\n");
      out.write("                        ");
 Login user = (Login) request.getSession().getAttribute("user"); 
      out.write("\r\n");
      out.write("                        ");
 String error = (String) request.getSession().getAttribute("error1"); 
      out.write("\r\n");
      out.write("                        ");
 if (user == null) {
      out.write("\r\n");
      out.write("                            <form method=\"post\" action=\"/Progra4_project/AAMAirlinesService?action=userLogin\"><span class=\"inicioSesion\" id=\"inicioSesion\">\r\n");
      out.write("                                    <span class=\"campoUs1\">\r\n");
      out.write("                                        Usuario:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n");
      out.write("                                        <input class=\"campoUs\" name=\"user\" id=\"user\" type=\"text\">\r\n");
      out.write("                                        <br>\r\n");
      out.write("                                        Contraseña:\r\n");
      out.write("                                        <input class=\"campoUs\" name=\"pass\" id=\"pass\" type=\"text\"/>\r\n");
      out.write("                                        </br>\r\n");
      out.write("                                        </input>\r\n");
      out.write("                                    </span>\r\n");
      out.write("                                    <div>\r\n");
      out.write("                                        <br>\r\n");
      out.write("                                        <span class=\"boton1\">\r\n");
      out.write("                                            <input class=\"boton\" id=\"login\" type=\"submit\" value=\"Login\">\r\n");
      out.write("                                            <input class=\"boton\" id=\"signup\" type=\"button\" value=\"SignUp\" onclick=\"redireccionar()\">\r\n");
      out.write("                                            </input>\r\n");
      out.write("                                            </input>\r\n");
      out.write("                                        </span>\r\n");
      out.write("                                        </br>\r\n");
      out.write("                                        ");
 if (error != null){ 
      out.write("\r\n");
      out.write("                                        <p> <h3 style=\"color: red;text-align: center;\"> Error usuario o contraseña incorrecto</h3> </p>\r\n");
      out.write("                                        ");
}
      out.write("\r\n");
      out.write("                                    </div>\r\n");
      out.write("                                </span>\r\n");
      out.write("                            </form>\r\n");
      out.write("                        ");
}
      out.write(" \r\n");
      out.write("                                 <!-- ---------------------- USUARIO LOGUEADO ----------------------- -->\r\n");
      out.write("                        ");
 if (user != null) {
      out.write("                            \r\n");
      out.write("                            <form method=\"post\" action=\"/Progra4_project/AAMAirlinesService?action=userLogout\">\r\n");
      out.write("                                <div class=\"Log\">\r\n");
      out.write("                                    <div id=\"Log\" style=\"font-family:Papyrus,fantasy; font-size:15px; font-weight:700; color:white;\">\r\n");
      out.write("                                        <p class=\"Log\"> Usuario: ");
      out.print(user.getUsuario());
      out.write("</p>\r\n");
      out.write("                                        <p class=\"Log\" ><input class=\"boton\" type=\"submit\" value=\"Logout\"> <input class=\"boton\" type=\"button\" value=\"Perfil\"></p>\r\n");
      out.write("                                    </div>\r\n");
      out.write("                                </div>\r\n");
      out.write("                            </form>                           \r\n");
      out.write("                        ");
}
      out.write("   \r\n");
      out.write("                            <!-- --------------------------------------------------------------- -->\r\n");
      out.write("                    </div>\r\n");
      out.write("                </div>\r\n");
      out.write("            </div>\r\n");
      out.write("            <!-- ---------------------- NAVEGACION ADMINISTRACION ----------------------- -->\r\n");
      out.write("            <div class=\"Admin\">\r\n");
      out.write("                <ul class=\"MyMenuAdmi\">\r\n");
      out.write("                    <li>\r\n");
      out.write("                        <a href=\"Aviones.jsp\" title=\"Aviones\">\r\n");
      out.write("                            <image border=\"0\" src=\"\">\r\n");
      out.write("                            Aviones\r\n");
      out.write("                            </image>\r\n");
      out.write("                        </a>\r\n");
      out.write("                    </li>\r\n");
      out.write("                    <li>\r\n");
      out.write("                        <a href=\"Rutas.jsp\" title=\"Rutas\">\r\n");
      out.write("                            <image border=\"0\" src=\"\">\r\n");
      out.write("                            Rutas\r\n");
      out.write("                            </image>\r\n");
      out.write("                        </a>\r\n");
      out.write("                    </li>\r\n");
      out.write("                    <li>\r\n");
      out.write("                        <a href=\"Vuelos.jsp\" title=\"Vuelos\">\r\n");
      out.write("                            <image border=\"0\" src=\"\">\r\n");
      out.write("                            Vuelos\r\n");
      out.write("                            </image>\r\n");
      out.write("                        </a>\r\n");
      out.write("                    </li>\r\n");
      out.write("                    <li>\r\n");
      out.write("                        <a href=\"Ciudades.jsp\" title=\"Ciudades\">\r\n");
      out.write("                            <image border=\"0\" src=\"\">\r\n");
      out.write("                            Ciudades\r\n");
      out.write("                            </image>\r\n");
      out.write("                        </a>\r\n");
      out.write("                    </li>\r\n");
      out.write("                </ul>\r\n");
      out.write("            </div>\r\n");
      out.write("\r\n");
      out.write("            \r\n");
      out.write("            <div class=\"SubAdmin\">\r\n");
      out.write("                <ul class=\"MyMenuSubAdmi\">\r\n");
      out.write("                    <li>\r\n");
      out.write("                        <a href=\"Vuelos_1.jsp\" title=\"Nuevo Ingreso\">\r\n");
      out.write("                            <image border=\"0\" src=\"\">\r\n");
      out.write("                            Nuevo Ingreso\r\n");
      out.write("                            </image>\r\n");
      out.write("                        </a>\r\n");
      out.write("                    </li>\r\n");
      out.write("                    <li>\r\n");
      out.write("                        <a href=\"Vuelos_2.jsp\" title=\"Administrar\">\r\n");
      out.write("                            <image border=\"0\" src=\"\">\r\n");
      out.write("                            Administrar\r\n");
      out.write("                            </image>\r\n");
      out.write("                        </a>\r\n");
      out.write("                    </li>               \r\n");
      out.write("                </ul>\r\n");
      out.write("            </div>\r\n");
      out.write("            \r\n");
      out.write("            <img alt=\"\" class=\"image\" src=\"img/Vuelos.jpg\" style=\"float:left;\" id=\"Ad\">     \r\n");
      out.write("                 \r\n");
      out.write("            <!-- ---------------------- PIE DE PAGINA ---------------------- -->\r\n");
      out.write("\r\n");
      out.write("            ");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<div class=\"container_pie\">\r\n");
      out.write("    <div class=\"row \">\r\n");
      out.write("        <p class=\"text-center\">\r\n");
      out.write("            Andres-Alex-Maikol Airlines\r\n");
      out.write("        </p>\r\n");
      out.write("        <p class=\"text-center\">\r\n");
      out.write("            AAM es la marca comercial que representa a las aerolíneas latinoamericanas integradas en AAM Holdings S.A.\r\n");
      out.write("        </p>\r\n");
      out.write("        <p class=\"text-center\">\r\n");
      out.write("            Contáctenos a los numeros:\r\n");
      out.write("        </p>\r\n");
      out.write("        <p class=\"text-center\">\r\n");
      out.write("            (506): 8326-7394\r\n");
      out.write("        </p>\r\n");
      out.write("        <p class=\"text-center\">\r\n");
      out.write("            (506): 8501-6092\r\n");
      out.write("        </p>\r\n");
      out.write("        <p class=\"text-center\">\r\n");
      out.write("            (506): 8739-0871\r\n");
      out.write("        </p>\r\n");
      out.write("        <p class=\"text-center\">\r\n");
      out.write("            Correo electronico: atencionAlCliente@aam.com\r\n");
      out.write("        </p>\r\n");
      out.write("    </div>\r\n");
      out.write("</div>\r\n");
      out.write("<br>\r\n");
      out.write("<div class=\"container_pie\" id=\"pie\">\r\n");
      out.write("    <div class=\"row\">\r\n");
      out.write("        <p class=\"text-center\">\r\n");
      out.write("            Derechos Reservados © · AAM Airlines · 2017\r\n");
      out.write("        </p>\r\n");
      out.write("    </div>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("            \r\n");
      out.write("        </div>\r\n");
      out.write("       \r\n");
      out.write("        <script src=\"http://code.jquery.com/jquery-latest.js\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <script src=\"js/bootstrap.min.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <link href=\"css/normalize.css\" rel=\"stylesheet\" type=\"text/css\"/>\r\n");
      out.write("        <link href=\"css/datepicker.css\" rel=\"stylesheet\" type=\"text/css\"/>\r\n");
      out.write("        <script src=\"js/jquery-1.7.1.min.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <script src=\"js/jquery-ui-1.8.18.custom.min.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <script src=\"js/funcionesJQuery.js\" type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("    </body>\r\n");
      out.write("\r\n");
      out.write("</html>\r\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
