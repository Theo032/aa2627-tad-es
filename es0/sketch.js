const larghezzaCanvas = 800
const altezzaCanvas = 600
const dimensioneBase = 80
const ampiezzaOscillazione = 30
const margineCanvas = dimensioneBase + ampiezzaOscillazione
const velocitaOscillazione = 0.05
const velocitaDispersione = 0.25
const tonalitaMassima = 360
const formeDisponibili = ["cerchio", "quadrato", "triangolo"]

let particelle = []
let formaScelta
let tono

function setup() {
    createCanvas(larghezzaCanvas, altezzaCanvas)
    colorMode(HSL)
}

function draw() {
    background(20)

    if (
        mouseIsPressed &&
        formaScelta &&
        (mouseX !== pmouseX || mouseY !== pmouseY)
    ) {
        aggiungiParticella(mouseX, mouseY)
    }

    const particelleVisibili = []

    for (const particella of particelle) {
        particella.x = particella.x + particella.velocitaX
        particella.y = particella.y + particella.velocitaY

        if (
            particella.x > -margineCanvas &&
            particella.x < width + margineCanvas &&
            particella.y > -margineCanvas &&
            particella.y < height + margineCanvas
        ) {
            const dimensione = dimensioneBase + sin(frameCount * velocitaOscillazione + particella.fase) * ampiezzaOscillazione

            stroke(100)
            fill(particella.tono, 100, 40)

            if (particella.forma === "cerchio") {
                circle(particella.x, particella.y, dimensione)
            } else if (particella.forma === "quadrato") {
                square(particella.x - dimensione / 2, particella.y - dimensione / 2, dimensione)
            } else {
                triangle(
                    particella.x, particella.y - dimensione / 2,
                    particella.x - dimensione / 2, particella.y + dimensione / 2,
                    particella.x + dimensione / 2, particella.y + dimensione / 2
                )
            }

            particelleVisibili.push(particella)
        }
    }

    particelle = particelleVisibili
}

function mousePressed() {
    formaScelta = random(formeDisponibili)
    tono = random(tonalitaMassima)
    aggiungiParticella(mouseX, mouseY)
}

function aggiungiParticella(x, y) {
    particelle.push({
        x: x,
        y: y,
        velocitaX: random(-velocitaDispersione, velocitaDispersione),
        velocitaY: random(-velocitaDispersione, velocitaDispersione),
        fase: random(TWO_PI),
        forma: formaScelta,
        tono: tono
    })
}

