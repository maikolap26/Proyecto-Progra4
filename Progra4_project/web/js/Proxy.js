var Proxy = Proxy || {};
Proxy.getCiudades = function(callback) {
    var AJAX_req = new XMLHttpRequest();
    url = "/AAMAirlines/AAMAirlinesService?action=ciudadAll";
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function() {
        if (AJAX_req.readyState == 4 && AJAX_req.status === 200) {
            var object = JSON.parse(AJAX_req.responseText, JsonUtils.revive);
            callback(object);
        }
    };
    AJAX_req.send();
};
Proxy.getPromo = function(callback) {
    var AJAX_req = new XMLHttpRequest();
    url = "/AAMAirlines/AAMAirlinesService?action=vueloListPromo";
    AJAX_req.open("GET", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.send();
};
Proxy.vuelosSearch = function(origen, destino, callback) {
    var AJAX_req = new XMLHttpRequest();
    url = "/AAMAirlines/AAMAirlinesService?action=vueloListSearch";
    AJAX_req.open("GET", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.send("origen=" + origen + "&destino=" + destino);
}