
package AAMAirline.service;

import AAMAirline.model.AAMAirlineModel;
import AAMAirline.model.Ciudad;
import AAMAirline.model.Jsonable;
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

@WebServlet(name="AAMAirlinesService", urlPatterns= {"/AAMAirlinesService"})
public class AAMAirlinesService extends HttpServlet {
    AAMAirlineModel model;
	protected void processRequest(HttpServletRequest request,HttpServletResponse response)
		throws ServletException, IOException{
			response.setContentType("text/html;charset=UTF-8");
			try(PrintWriter out=response.getWriter()){
				response.setContentType("text/xml");
				RuntimeTypeAdapterFactory<Jsonable> rta = RuntimeTypeAdapterFactory.of(Jsonable.class,"_class")
				.registerSubtype(Ciudad.class,"Ciudad")
				.registerSubtype(Vuelo.class,"Vuelo");
				Gson gson=new GsonBuilder().registerTypeAdapterFactory(rta).setDateFormat("dd/MM/yyyy").create();
				String json;
				String accion=request.getParameter("action");
				System.out.println(accion);
				List<Ciudad> ciudades;
				List<Vuelo> vuelos;
				switch(accion){
					case "ciudadListAll":
						ciudades=model.getCiudades();
						json=gson.toJson(ciudades);
						out.write(json);
						break;
					case "vueloListPromo":
						vuelos=model.getVuelos();
						json=gson.toJson(vuelos);
						out.write(json);
						break;
					case "vueloListSearch":
						String origen=request.getParameter("origen");
						String destino=request.getParameter("destino");
						vuelos=model.getVuelos(origen,destino);
						json=gson.toJson(vuelos);
						out.write(json);
						break;
				}
			}
			catch(Exception e){System.out.println(e);}
		}
		
		@Override
		public void init() throws ServletException{
			super.init();
			model=new AAMAirlineModel();
		}
}
