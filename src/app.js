import "bootstrap";
import "./style.css";

const excusas = [
   "Mi perro se comió la tarea.",
   "Se me olvidó porque estaba salvando el mundo.",
   "Me quedé dormido porque estuve estudiando toda la noche.",
   "No escuché el despertador, se quedó sin batería.",
   "Una invasión alienígena bloqueó el camino.",
   "La impresora explotó justo cuando iba a imprimir.",
   "Estaba ayudando a un anciano a cruzar la calle.",
   "Me equivoqué de día, pensé que era domingo.",
   "Mi gato apagó mi computadora.",
   "El tráfico estaba imposible, incluso volando no llegaba."
];

function generarExcusa() {
   const indice = Math.floor(Math.random() * excusas.length);
   document.getElementById('excusa').textContent = excusas[indice];
}

window.generarExcusa = generarExcusa;