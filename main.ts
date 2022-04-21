import { Serie } from "./Serie.js";
import { series } from "./Data.js";

let sumaTemporadas: number=0;
let numeroSeries: number=0;

function addSerie(serie: Serie) {
    let tabSeriesBody= document.getElementById("tabSeriesBody")!;
    let trSerie= document.createElement("tr");

    trSerie.innerHTML= `<th scope="row" >${serie.id}</th><td>${serie.nombre}</td><td>${serie.canal}</td><td>${serie.temporadas}</td>`;
  tabSeriesBody.appendChild(trSerie);
  numeroSeries+=1;
  sumaTemporadas+=serie.temporadas;
}

function addSeries():void{
    series.forEach(element => {addSerie(element);});

}

function promedioTemporadas():void{
    let trPromedio= document.createElement("tr");
    try{
        trPromedio.innerHTML=`<tr><th colspan=4>Temporadas promedio: ${(sumaTemporadas/numeroSeries).toPrecision(2)}</th></tr>`;
    }catch (error){console.log("Error verifique la información")}
    document.getElementById("tabSeriesBody")!.appendChild(trPromedio);
}

addSeries();
promedioTemporadas();
