/**Consegna
   Inseriamo in pagina l’immagine della lampadina spenta che 
   trovate in allegato e accanto un bottone con la scritta “Accendi”.
   Al click del bottone, la lampadina dovrà accendersi 
   (dovremo quindi utilizzare l’immagine della lampadina accesa,
   sempre in allegato)
*/

// Selezionono gli elementi HTML

const lampad = document.getElementById("lampad-on");
const button = document.getElementById("button-on");

// Traccia della lampadina se accesa o spenta

let isOff = false;

// Click del bottone con cambio immagine

button.addEventListener("click", function () {
  if (!isOff) {
    lampad.src = "img/yellow_lamp.png";
    button.textContent = "Spegni";
  } else {
    lampad.src = "img/white_lamp.png";
    button.textContent = "Accendi";
  }

  isOff = !isOff;
});
