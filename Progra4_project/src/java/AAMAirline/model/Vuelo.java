package AAMAirline.model;

public class Vuelo implements Jsonable {

    public Vuelo(String codigo_Vuelo, String dia_salida, String hora_salida, String hora_llegada, Ruta ruta, Avion avion, float precio) {
        this.codigo_Vuelo = codigo_Vuelo;
        this.avion = avion;
        this.dia_salida = dia_salida;
        this.hora_salida = hora_salida;
        this.ruta = ruta;
        this.hora_llegada = hora_llegada;
        this.precio = precio;
    }

    public String getCodigo_Vuelo() {
        return codigo_Vuelo;
    }

    public void setCodigo_Vuelo(String codigo_Vuelo) {
        this.codigo_Vuelo = codigo_Vuelo;
    }

    public String getDia_salida() {
        return dia_salida;
    }

    public void setDia_salida(String dia_salida) {
        this.dia_salida = dia_salida;
    }

    public String getHora_salida() {
        return hora_salida;
    }

    public void setHora_salida(String hora_salida) {
        this.hora_salida = hora_salida;
    }

    public String getHora_llegada() {
        return hora_llegada;
    }

    public void setHora_llegada(String hora_llegada) {
        this.hora_llegada = hora_llegada;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public Avion getAvion() {
        return avion;
    }

    public void setAvion(Avion avion) {
        this.avion = avion;
    }

    public Ruta getRuta() {
        return ruta;
    }

    public void setRuta(Ruta ruta) {
        this.ruta = ruta;
    }

    private String codigo_Vuelo;
    private String dia_salida;
    private String hora_salida;
    private String hora_llegada;
    private Ruta ruta;
    private Avion avion;
    private float precio;
}
