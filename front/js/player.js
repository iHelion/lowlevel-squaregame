const MARGIN = 10
const SIZE = 50
const STEP = 20

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

    X -= STEP

}


export function goRight() {

    X += STEP

}


export function goUp() {

    Y -= STEP

}


export function goDown() {

    Y += STEP

}