const MARGIN = 10
const SIZE = 50
const STEP = 5

let X = 0
let Y = 0

function setInitialPosition(ctx) {
    const canvas = ctx.canvas
    const width = canvas.clientWidth
    const height = canvas.clientHeight

    X = (width - SIZE) / 2
    Y = height - SIZE - MARGIN
}

export function initialDraw(ctx) {
    setInitialPosition(ctx)
    draw(ctx)
}

export function draw(ctx) {
    ctx.reset()
    ctx.fillRect(X, Y, SIZE, SIZE)
}

export function goLeft() {
    if (X - STEP >= 0) {
        X -= STEP
    }
}

export function goRight() {
    if (X + STEP + SIZE <= 720) {
        X += STEP
    }
}

export function goUp() {
    if (Y - STEP >= 0) {
        Y -= STEP
    }
}

export function goDown() {
    if (Y + STEP + SIZE <= 720) {
        Y += STEP
    }
}