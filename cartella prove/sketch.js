const larghezzaCanvas = 800
const altezzaCanvas = 600
const numeroFormePerClic = 50
const velocitaMinima = 1
const velocitaMassima = 4
const dimensioneBase = 80
const ampiezzaOscillazione = 30
const margineCanvas = dimensioneBase + ampiezzaOscillazione
const velocitaOscillazione = 0.05
const tonalitaMassima = 360
const formeDisponibili = ["cerchio", "quadrato", "triangolo"]

let particelle = []

function setup() {
    createCanvas(larghezzaCanvas, altezzaCanvas)
    colorMode(HSL)
}

function draw() {
    background(20)

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
    const forma = random(formeDisponibili)
    const tono = random(tonalitaMassima)

    for (let i = 0; i < numeroFormePerClic; i = i + 1) {
        const angolo = random(TWO_PI)
        const velocita = random(velocitaMinima, velocitaMassima)

        particelle.push({
            x: mouseX,
            y: mouseY,
            velocitaX: cos(angolo) * velocita,
            velocitaY: sin(angolo) * velocita,
            fase: random(TWO_PI),
            forma: forma,
            tono: tono
        })
    }
}
