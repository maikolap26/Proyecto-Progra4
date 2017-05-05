package AAMAirline.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class AAMAirlineModel {

    public List<Ciudad> getCiudades() {
        Ciudad[] ciudades = {
            new Ciudad("SJO", "San Jose", "Costa Rica"),
            new Ciudad("LIB", "Guanacaste", "Costa Rica"),
            new Ciudad("MIA", "Miami", "USA"),
            new Ciudad("CAN", "Cancun", "MEXICO"),
            new Ciudad("ORL", "Orlando", "USA"),
            new Ciudad("PAN", "Panama", "Panama")};
        return new ArrayList(Arrays.asList(ciudades));
    }

    public List<Vuelo> getVuelos() {
        List<Ciudad> ciudades = new ArrayList(this.getCiudades());
        Ruta[] rutas = {
            /* 0 */new Ruta("111", ciudades.get(0), ciudades.get(4), "2"),
            /* 1 */ new Ruta("222", ciudades.get(2), ciudades.get(4), "8"),
            /* 2 */ new Ruta("333", ciudades.get(1), ciudades.get(2), "3"),
            /* 3 */ new Ruta("444", ciudades.get(3), ciudades.get(5), "10"),
            /* 4 */ new Ruta("555", ciudades.get(4), ciudades.get(2), "2"),
            /* 5 */ new Ruta("666", ciudades.get(4), ciudades.get(2), "5"),
            /* 6 */ new Ruta("777", ciudades.get(1), ciudades.get(2), "7"),
            /* 7 */ new Ruta("888", ciudades.get(5), ciudades.get(1), "1"),
            /* 8 */ new Ruta("999", ciudades.get(3), ciudades.get(4), "5"),
            /* 9 */ new Ruta("101010", ciudades.get(1), ciudades.get(2), "5"),};
        Avion[] aviones = {
            /* 0 */new Avion("01", "Toyota", "Avianka", 100, 10, 10),
            /* 1 */ new Avion("02", "Hyundai", "Aeromexican", 200, 20, 10),
            /* 2 */ new Avion("03", "Ford", "Colon", 150, 15, 10),
            /* 3 */ new Avion("04", "Chevrolet", "Lavara", 100, 10, 10)
        };
        Vuelo[] vuelos = {
            new Vuelo("01", "Martes", "9", Integer.toString(9 + Integer.parseInt(rutas[0].getDuracion())),rutas[0], aviones[0],  400),
            new Vuelo("02", "Lunes", "12", Integer.toString(12 + Integer.parseInt(rutas[1].getDuracion())),rutas[1], aviones[1],  300),
            new Vuelo("03", "Sabado", "3",  Integer.toString(3 + Integer.parseInt(rutas[2].getDuracion())),rutas[2], aviones[2], 550),
            new Vuelo("04", "Martes", "8",  Integer.toString(8 + Integer.parseInt(rutas[3].getDuracion())),rutas[3],aviones[3],  400),
            new Vuelo("05", "Viernes", "2",  Integer.toString(2 + Integer.parseInt(rutas[4].getDuracion())), rutas[4], aviones[0],400),
            new Vuelo("06", "Jueves", "5",  Integer.toString(5 + Integer.parseInt(rutas[5].getDuracion())),rutas[5],aviones[1],  400),
            new Vuelo("07",  "Miercoles", "7",  Integer.toString(7 + Integer.parseInt(rutas[6].getDuracion())),rutas[6],aviones[2], 100),
            new Vuelo("08", "Martes", "1",  Integer.toString(1 + Integer.parseInt(rutas[7].getDuracion())), rutas[7],aviones[3], 200),};
        return new ArrayList(Arrays.asList(vuelos));
    }

    public List<Vuelo> getVuelos(String origen, String destino) {
        ArrayList<Vuelo> result = new ArrayList();
        for (Vuelo v : this.getVuelos()) {
            if (v.getRuta().getCiudadO().getNombre().contains(origen) && v.getRuta().getCiudadD().getNombre().contains(destino)) {
                result.add(v);
            }
        }
        return result;
    }

    public List<Vuelo> getVuelos(String origen) {
        ArrayList<Vuelo> result = new ArrayList();
        for (Vuelo v : this.getVuelos()) {
            if (v.getRuta().getCiudadO().getCodigo_ciudad().contains(origen)) {
                result.add(v);
            }
        }
        return result;
    }
}
    