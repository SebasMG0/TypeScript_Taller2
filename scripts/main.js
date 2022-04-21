import { series } from "./Data.js";
var sumaTemporadas = 0;
var numeroSeries = 0;
function addSerie(serie) {
    var tabSeriesBody = document.getElementById("tabSeriesBody");
    var trSerie = document.createElement("tr");
    trSerie.innerHTML = "<th scope=\"row\" >".concat(serie.id, "</th><td>").concat(serie.nombre, "</td><td>").concat(serie.canal, "</td><td>").concat(serie.temporadas, "</td>");
    tabSeriesBody.appendChild(trSerie);
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
