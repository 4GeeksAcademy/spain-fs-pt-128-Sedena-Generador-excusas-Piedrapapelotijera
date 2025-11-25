
const opciones = ["scissors","lizard","spock","rock","paper"]


  const rules = {
  rock: ['scissors', "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"]
}


function jugar (Usuario) {


const OpciónOrdenador = Math.floor(Math.random() * opciones.length);

let OrdenadorAString = opciones[OpciónOrdenador]


if (!opciones.includes(Usuario)) {

   console.log("Elige en base a las opciones dadas");


} else if (rules[Usuario].includes(OrdenadorAString) ) {

    console.log("Tu opción: "+ Usuario);

    console.log("Elección del ordenador: "+ OrdenadorAString);

    console.log("Has ganado");


} else  if (Usuario === OrdenadorAString) {

   console.log("Tu opción: "+ Usuario);

   console.log("Elección del ordenador: "+ OrdenadorAString);

   console.log("Habeis empatado");
   

} else {

  console.log("Tu opción: "+ Usuario);

  console.log("Elección del ordenador: "+ OrdenadorAString);

  console.log("Has perdido");

}

}

console.log(jugar("rock"));














 
