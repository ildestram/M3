// Funzione per rimuovere l'intera riga quando il bottone "Cancella" viene premuto
// In questo caso non uso un addEventListener ma provo a scrivere subito una funzione con l'onclick che poi vado ad assegnare direttamente al botton in html

function deleteRow(button) {
  let row = button.parentNode.parentNode.parentNode; // prendo l'elemento row della table (tr)
  row.parentNode.removeChild(row);
}
