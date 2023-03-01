/* 1. Creo un bottone nell'html
2. Vado a prendere il bottone tramite getElementById e lo inserisco in una variabile
3. Vado a prendere tutte le card con querySelectorAll e le inserisco in una variabile
4. Creo un addEventListener al bottone
5. Il bottone deve fare in modo che al mio clic le carte vengano rimosse
*/
const bottone = document.getElementById("button-one");
// voglio fare in modo che se clicco l'altro bottone mi ricompaiono le card
const bottoneDue = document.getElementById("button-two");
const cards = document.querySelectorAll(".card");
bottone.addEventListener("click", function () {
  cards.forEach(function (card) {
    card.remove();
  });
});
