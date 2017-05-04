/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package AAMAirline.model;

/**
 *
 * @author jimen
 */
public class Avion implements Jsonable{

    public Avion(String codigo_Avion, String modelo, String marca, int cant_pasajeros, int cant_filas, int cant_Asiento_Fila) {
        this.codigo_Avion = codigo_Avion;
        this.modelo = modelo;
        this.marca = marca;
        this.cant_pasajeros = cant_pasajeros;
        this.cant_filas = cant_filas;
        this.cant_Asiento_Fila = cant_Asiento_Fila;
    }

    public String getCodigo_Avion() {
        return codigo_Avion;
    }

    public void setCodigo_Avion(String codigo_Avion) {
        this.codigo_Avion = codigo_Avion;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public int getCant_pasajeros() {
        return cant_pasajeros;
    }

    public void setCant_pasajeros(int cant_pasajeros) {
        this.cant_pasajeros = cant_pasajeros;
    }

    public int getCant_filas() {
        return cant_filas;
    }

    public void setCant_filas(int cant_filas) {
        this.cant_filas = cant_filas;
    }

    public int getCant_Asiento_Fila() {
        return cant_Asiento_Fila;
    }

    public void setCant_Asiento_Fila(int cant_Asiento_Fila) {
        this.cant_Asiento_Fila = cant_Asiento_Fila;
    }
    
    private String codigo_Avion;
    private String modelo;
    private String marca;
    private int cant_pasajeros;
    private int cant_filas;
    private int cant_Asiento_Fila;
}
