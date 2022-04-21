import { series } from "./Data.js";
var sumaTemporadas = 0;
var numeroSeries = 0;
function addCard(serie) {
    document.getElementById("tarjeta").setAttribute("style", "width: 25rem;");
    document.getElementById("imagen").setAttribute("src", "".concat(serie.portada));
    document.getElementById("cardTitulo").innerHTML = ("".concat(serie.nombre));
    document.getElementById("cardTexto").innerHTML = ("".concat(serie.descripcion));
}
function addSerie(serie) {
    var _a;
    var tabSeriesBody = document.getElementById("tabSeriesBody");
    var trSerie = document.createElement("tr");
    trSerie.innerHTML = "<th scope=\"row\" >".concat(serie.id, "</th><td><a id=\"").concat(serie.id, "\" href=\"#\" >").concat(serie.nombre, "</a></td><td>").concat(serie.canal, "</td><td>").concat(serie.temporadas, "</td>");
    tabSeriesBody.appendChild(trSerie);
    (_a = document.getElementById("".concat(serie.id))) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { addCard(serie); });
    numeroSeries += 1;
    sumaTemporadas += serie.temporadas;
}
function addSeries() {
    series.forEach(function (element) { addSerie(element); });
}
function promedioTemporadas() {
    var trPromedio = document.createElement("tr");
    try {
        trPromedio.innerHTML = "<tr><th colspan=4>Temporadas promedio: ".concat((sumaTemporadas / numeroSeries).toPrecision(2), "</th></tr>");
    }
    catch (error) {
        console.log("Error verifique la información");
    }
    document.getElementById("tabSeriesBody").appendChild(trPromedio);
}
addSeries();
promedioTemporadas();
