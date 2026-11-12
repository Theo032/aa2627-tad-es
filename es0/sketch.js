let tono

function setup() {
    createCanvas(800, 600)
    colorMode(HSL)
    tono = random(360)
    background(20)
}

function draw() {
    if (mouseIsPressed) {
        stroke(100)
        fill(tono, 100, 40)
        let x = mouseX
        let y = mouseY
        let dx = 2
        let dy = 2
        for (let i = 0; i < 50; i = i + 1) {
            x = x + dx
            y = y + dy
            //circle(x, y, (50-i)/2)
            square(x, y, (50-i)/2)
            if (random() < 0.1) {
                dx = random(-10, 10)
                dy = random(-10, 10)
            }
        }
        if (random() < 0.02) {  // due volte su cento...
            tono = random()  // cambia il tono del riempimento
        }
    }
}