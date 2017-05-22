package AAMAirline.service;

import AAMAirline.model.AAMAirlineModel;
import AAMAirline.model.Avion;
import AAMAirline.model.Ciudad;
import AAMAirline.model.Jsonable;
import AAMAirline.model.Login;
import AAMAirline.model.Ruta;
import AAMAirline.model.Usuario;
import AAMAirline.model.Vuelo;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.typeadapters.RuntimeTypeAdapterFactory;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "AAMAirlinesService", urlPatterns = {"/AAMAirlinesService"})
public class AAMAirlinesService extends HttpServlet {

    AAMAirlineModel model;

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            response.setContentType("text/xml");
            RuntimeTypeAdapterFactory<Jsonable> rta = RuntimeTypeAdapterFactory.of(Jsonable.class, "_class")
                    .registerSubtype(Ciudad.class, "Ciudad")
                    .registerSubtype(Ruta.class, "Ruta")
                    .registerSubtype(Avion.class, "Avion")
                    .registerSubtype(Vuelo.class, "Vuelo");
            Gson gson = new GsonBuilder().registerTypeAdapterFactory(rta).setDateFormat("dd/MM/yyyy").create();
            String json;
            String accion = request.getParameter("action");
            System.out.println(accion);
            List<Ciudad> ciudades;
            List<Vuelo> vuelos;
            switch (accion) {
                case "ciudadListAll":
                    ciudades = model.getCiudades1();
                    json = gson.toJson(ciudades);
                    out.write(json);
                    break;
                case "vueloListPromo":
                    vuelos = model.getVuelos();
                    json = gson.toJson(vuelos);
                    out.write(json);
                    break;
                case "vueloListSearch":
                    String origen = request.getParameter("origen");
                    String destino = request.getParameter("destino");
                    vuelos = model.getVuelos(origen, destino);
                    json = gson.toJson(vuelos);
                    out.write(json);
                    break;
                case "userLogin":
                    String u=request.getParameter("user");
                    String p=request.getParameter("pass");
                    Login us = new Login(u, p, "0");
                    us = model.userLogin(us);
                    if (us.getTipo() != "0") {
                        request.getSession().setAttribute("user", us);
                        switch (us.getTipo()) {
                            case "1": // client
                                Usuario client = model.clientGet(us.getUsuario());
                                request.getSession().setAttribute("client", client);
                                request.getRequestDispatcher("/PaginaPrincipal.jsp").forward(request, response);
                                break;
                            case "2": // manager
                                request.getRequestDispatcher("/PaginaPrincipal.jsp").forward(request, response);
                                break;
                        }
                    }
                    break;
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    @Override
    public void init() throws ServletException {
        super.init();
        model = new AAMAirlineModel();
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
