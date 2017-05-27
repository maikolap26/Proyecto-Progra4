/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package AAMAirline.model;

/**
 *
 * @author ACS
 */

public class Localizacion implements Jsonable {
    
    int id_localizacion;
    String latitud;
    String longitud;
    float zoom;
    
    public Localizacion(int id_localizacion, String latitud, String longitud, float zoom) {
        this.id_localizacion = id_localizacion;
        this.latitud = latitud;
        this.longitud = longitud;
        this.zoom = zoom;
    }
    
    public Localizacion(String latitud, String longitud){
        this.id_localizacion = 0;
        this.latitud = latitud;
        this.longitud = longitud;
        this.zoom = 0;
    }

    public String devString() {
        return "Localizacion: " + this.id_localizacion
			+ "\n -> Latitud: " + this.latitud
			+ "\n -> Longitud: " + this.longitud
			+ "\n -> Zoom" + this.zoom;
    }

    public String columnValues() {
        return this.latitud + ", "
			+ this.longitud;
    }

    public String columnNames() {
        return "latitud, longitud";
    }

    public int getId_localizacion() {
        return id_localizacion;
    }

    public String getLatitud() {
        return latitud;
    }

    public void setLatitud(String latitud) {
        this.latitud = latitud;
    }

    public String getLongitud() {
        return longitud;
    }

    public void setLongitud(String longitud) {
        this.longitud = longitud;
    }

    public float getZoom() {
        return zoom;
    }

    public void setZoom(float zoom) {
        this.zoom = zoom;
    }
}

