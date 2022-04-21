import { Serie } from "./Serie.js";
import { series } from "./Data.js";

let sumaTemporadas: number=0;
let numeroSeries: number=0;

function addCard(serie:Serie):void{
    document.getElementById("tarjeta")!.setAttribute("style","width: 25rem;");
    document.getElementById("imagen")!.setAttribute("src",`${serie.portada}`);
    document.getElementById("cardTitulo")!.innerHTML=(`${serie.nombre}`);
    document.getElementById("cardTexto")!.innerHTML=(`${serie.descripcion}`);
}

function addSerie(serie: Serie) {
  let tabSeriesBody= document.getElementById("tabSeriesBody")!;
  let trSerie= document.createElement("tr");

  trSerie.innerHTML= `<th scope="row" >${serie.id}</th><td><a id="${serie.id}" href="#" >${serie.nombre}</a></td><td>${serie.canal}</td><td>${serie.temporadas}</td>`;
  tabSeriesBody.appendChild(trSerie);
  document.getElementById(`${serie.id}`)?.addEventListener("click", function (){addCard(serie);});
  numeroSeries+=1;
  sumaTemporadas+=serie.temporadas;
}

function addSeries():void{
    series.forEach(element => {addSerie(element);});

}

function promedioTemporadas():void{
    let trPromedio= document.createElement("tr");
    try{
        trPromedio.innerHTML=`<tr><th colspan=4 id=\"filaPromedio\"">Temporadas promedio: ${(sumaTemporadas/numeroSeries).toPrecision(1)}</th></tr>`;
    }catch (error){console.log("Error verifique la información")}
    document.getElementById("tabSeriesBody")!.appendChild(trPromedio);
}


addSeries();
promedioTemporadas();