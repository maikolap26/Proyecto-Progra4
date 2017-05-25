package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import AAMAirline.model.Usuario;
import AAMAirline.model.Login;

public final class QuienesSomos_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.ArrayList<String>(2);
    _jspx_dependants.add("/Header.jspf");
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
      out.write("<html>\r\n");
      out.write("\r\n");
      out.write("<head>\r\n");
      out.write("\t<title>Quienes Somos</title>\r\n");
      out.write("\t<meta charset=\"UTF-8\">\r\n");
      out.write("\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n");
      out.write("\t<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n");
      out.write("\t<link href=\"css/estilo1.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n");
      out.write("\t<script src=\"js/Metodos.js\" type=\"text/javascript\"></script>\r\n");
      out.write("\t<script src=\"js/Usuario.js\" type=\"text/javascript\"></script>\r\n");
      out.write("</head>\r\n");
      out.write("\r\n");
      out.write("<body class=\"pagina\">\r\n");
      out.write("\r\n");
      out.write("\t<!------------------------------- ENCABEZADO ------------------------------->\r\n");
      out.write("        \r\n");
      out.write("        ");
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
      out.write("                            </form>                            \r\n");
      out.write("                        ");
}
      out.write(" \r\n");
      out.write("                            <!-- ---------------------- USUARIO LOGUEADO ----------------------- -->\r\n");
      out.write("                        ");
 if (user != null) {
      out.write("                            \r\n");
      out.write("                            <form method=\"post\" action=\"/Progra4_project/AAMAirlinesService?action=userLogout\">\r\n");
      out.write("                                <div class=\"Log\">\r\n");
      out.write("                                    <div id=\"Log\" style=\"font-family:Papyrus,fantasy; font-size:15px; font-weight:700; color:white;\">\r\n");
      out.write("                                        <p class=\"Log\"> Usuario: ");
      out.print(user.getUsuario());
      out.write("</p>\r\n");
      out.write("                                        <p class=\"Log\" ><input class=\"boton\" type=\"submit\" value=\"Logout\"> <input class=\"boton\" type=\"button\" value=\"Perfil\"> </p>\r\n");
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
      out.write("            <!-- ---------------------- NAVEGACION ----------------------- -->\r\n");
      out.write("            <div class=\"menuP\">\r\n");
      out.write("                <ul class=\"MyMenu\">\r\n");
      out.write("                    <li>\r\n");
      out.write("                        <a href=\"PaginaPrincipal.jsp\" title=\"Inicio\">\r\n");
      out.write("                            <image border=\"0\" src=\"\">\r\n");
      out.write("                            Inicio\r\n");
      out.write("                            </image>\r\n");
      out.write("                        </a>\r\n");
      out.write("                    </li>\r\n");
      out.write("                    <li>\r\n");
      out.write("                        <a href=\"QuienesSomos.jsp\" title=\"Quienes Somos\">\r\n");
      out.write("                            <image border=\"0\" src=\"\">\r\n");
      out.write("                            Quienes somos\r\n");
      out.write("                            </image>\r\n");
      out.write("                        </a>\r\n");
      out.write("                    </li>\r\n");
      out.write("                    <li>\r\n");
      out.write("                        <a href=\"Cousine.jsp\" title=\"Cousine a bordo\">\r\n");
      out.write("                            <image border=\"0\" src=\"\">\r\n");
      out.write("                            Cousine a bordo\r\n");
      out.write("                            </image>\r\n");
      out.write("                        </a>\r\n");
      out.write("                    </li>\r\n");
      out.write("                    <li>\r\n");
      out.write("                        <a href=\"ExperienciaABordo.jsp\" title=\"Experiencia\">\r\n");
      out.write("                            <image border=\"0\" src=\"\">\r\n");
      out.write("                            Experiencia\r\n");
      out.write("                            </image>\r\n");
      out.write("                        </a>\r\n");
      out.write("                    </li>\r\n");
      out.write("                    <li>\r\n");
      out.write("                        <a href=\"Consultas.jsp\" title=\"Consultas\">\r\n");
      out.write("                            <image border=\"0\" src=\"\">\r\n");
      out.write("                            Consultas\r\n");
      out.write("                            </image>\r\n");
      out.write("                        </a>\r\n");
      out.write("                    </li>\r\n");
      out.write("                </ul>\r\n");
      out.write("            </div>");
      out.write("\r\n");
      out.write("\t\r\n");
      out.write("\t<!------------------------------- TERMINA ENCABEZADO ------------------------------->\r\n");
      out.write("\r\n");
      out.write("\t<!------------------------------- CUERPO ------------------------------->\r\n");
      out.write("\t<div class=\"container_cuerpo\">\r\n");
      out.write("\t\t<div class=\"row\" id=\"fondo\">\r\n");
      out.write("\t\t\t<div id=\"fondo\">\r\n");
      out.write("\t\t\t\t<h4 id=\"Negrita\">His​toria Corp​orativa</h4>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div id=\"fondo\">\r\n");
      out.write("\t\t\t\t<img src=\"img/plane.jpg\" class=\"image2\" alt=\"\">\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\r\n");
      out.write("\t\t\t<div id=\"fondo\">\r\n");
      out.write("\t\t\t\t<br><br>\r\n");
      out.write("\t\t\t\t<p>AAM es la marca comercial que representa a las aerolíneas latinoamericanas integradas en AAM Holdings S.A. Nuestro equipo\r\n");
      out.write("\t\t\t\t\thumano integrado por más de 20.000 colaboradores <br> ha sido destacado por su excelencia en el servicio. Con las aerolíneas\r\n");
      out.write("\t\t\t\t\tAAM, especializadas en el transporte de pasajeros y carga, atendemos en forma directa más de 500 destinos <br> al rededor\r\n");
      out.write("\t\t\t\t\tdel mundo a bordo de una moderna flota de corto, mediano y largo alcance. ​</p>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\r\n");
      out.write("\t\t\t<div id=\"fondo\">\r\n");
      out.write("\t\t\t\t<br>\r\n");
      out.write("\t\t\t\t<p>A través de nuestra membresía con Star Alliance​, ofrecemos conectividad a más de 1.300 destinos en 192 países de los\r\n");
      out.write("\t\t\t\t\tcinco continentes. Nuestro programa de lealtad LifeMiles <br> cuenta con más de 6 millones de socios, que día a día disfrutan\r\n");
      out.write("\t\t\t\t\tde los múltiples beneficios y ventajas exclusivas que ofrece este esquema de fidelidad.</p>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div id=\"fondo\">\r\n");
      out.write("\t\t\t\t<br>\r\n");
      out.write("\t\t\t\t<div id=\"fondo\">\r\n");
      out.write("\t\t\t\t\t<p id=\"Negrita\">\r\n");
      out.write("\t\t\t\t\t\tMision\r\n");
      out.write("\t\t\t\t\t</p>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<div id=\"fondo\">\r\n");
      out.write("\t\t\t\t\t<p>Conectamos al mundo con Latinoamérica, buscando dar siempre más.</p>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<div id=\"fondo\">\r\n");
      out.write("\t\t\t\t\t<p id=\"Negrita\">\r\n");
      out.write("\t\t\t\t\t\tVision\r\n");
      out.write("\t\t\t\t\t</p>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<div id=\"fondo\">\r\n");
      out.write("\t\t\t\t\t<p>Con la mejor gente y tecnología para una experiencia excepcional, seremos la aerolínea latinoamericana preferida en\r\n");
      out.write("\t\t\t\t\t\tel mundo.</p>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<div id=\"fondo\">\r\n");
      out.write("\t\t\t\t\t<p id=\"Negrita\">\r\n");
      out.write("\t\t\t\t\t\tValores\r\n");
      out.write("\t\t\t\t\t</p>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<div id=\"fondo\">\r\n");
      out.write("\t\t\t\t\t<p>&nbsp;&nbsp;&nbsp;&nbsp; * Vivimos la seguridad. </p>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<div id=\"fondo\">\r\n");
      out.write("\t\t\t\t\t<p>&nbsp;&nbsp;&nbsp;&nbsp; * Somos integros. </p>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<div id=\"fondo\">\r\n");
      out.write("\t\t\t\t\t<p>&nbsp;&nbsp;&nbsp;&nbsp; * Servimos con pasión. </p>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<div id=\"fondo\">\r\n");
      out.write("\t\t\t\t\t<p>&nbsp;&nbsp;&nbsp;&nbsp; * Trabajamos felices. </p>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<div id=\"fondo\">\r\n");
      out.write("\t\t\t\t\t<p>​&nbsp;&nbsp;&nbsp;&nbsp; * Creamos impacto sostenible. </p>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<!------------------------------- TERMINA CUERPO ------------------------------->\r\n");
      out.write("\r\n");
      out.write("\t<br>\r\n");
      out.write("\t<br>\r\n");
      out.write("\r\n");
      out.write("\t<!-- ---------------------- PIE DE PAGINA ---------------------- -->\r\n");
      out.write("\r\n");
      out.write("        ");
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
      out.write("\r\n");
      out.write("\t<!------------------------------- TERMINA PIE DE PAGINA ------------------------------->\r\n");
      out.write("\r\n");
      out.write("\t<script src=\"http://code.jquery.com/jquery-latest.js\"></script>\r\n");
      out.write("\t<script src=\"js/bootstrap.min.js\" type=\"text/javascript\"></script>\r\n");
      out.write("</body>\r\n");
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
