// Obiettivo: riprodurre un quadro astratto geometrico introducendo elementi
// casuali e colori che cambiano nel tempo o con il mouse, così da generare
// varianti coerenti con l'estetica dell'opera.
//
// Vincoli:
// - canvas da 800x600 pixel;
// - colori in HSL, HSB o OKLCH con colorMode();
// - colori e altri parametri dinamici in variabili dichiarate all'inizio del file;
// - variazioni casuali limitate da una regola;
// - commento iniziale con autore, titolo, anno e fonte del quadro;
// - animazione o interazione applicata ai colori o all'estensione delle aree;
// - preview.png rappresentativa.
//
// Quadro: da definire.
// Autore: da definire.
// Anno: da definire.
// Fonte: da definire.

const canvasWidth = 800;
const canvasHeight = 600;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noLoop();
}

function draw() {
  // Il codice del quadro astratto va aggiunto qui.
}
