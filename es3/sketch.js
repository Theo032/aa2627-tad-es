// Obiettivo: far generare una composizione tipografica animata o interattiva
// che cambi, mantenendo la coerenza con il significato del testo, senza
// ripetere mai lo stesso identico risultato.
//
// Vincoli:
// - canvas da 800x600 pixel;
// - solo caratteri tipografici disegnati con text(): niente figure geometriche;
// - testo di partenza scritto nel codice, in una stringa o in un array di stringhe;
// - font TTF o OTF salvato nella cartella e caricato con await loadFont() dentro async function setup();
// - composizione animata o interattiva, con valori ricavati da random() o da mouse/tastiera;
// - commento iniziale con il testo di partenza e il font usato;
// - preview.png rappresentativa.
//
// Testo di partenza: da definire.
// Font: da definire.

const canvasWidth = 800;
const canvasHeight = 600;

async function setup() {
  createCanvas(canvasWidth, canvasHeight);
  noLoop();
}

function draw() {
  // Il codice della composizione tipografica va aggiunto qui.
}
