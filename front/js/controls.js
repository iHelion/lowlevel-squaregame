import {
    initialDraw,
    draw,
    goLeft,
    goRight,
    goUp,
    goDown
} from './player.js'

const LEFT = 'a'
const RIGHT = 'd'
const UP = 'w'
const DOWN = 's'

let keysPressed = {}

function handleKeyDown(event) {
    keysPressed[event.key] = true
}

function handleKeyUp(event) {
    keysPressed[event.key] = false
}

function update(ctx) {
    if (keysPressed[LEFT]) {
        goLeft()
    }
    if (keysPressed[RIGHT]) {
        goRight()
    }
    if (keysPressed[UP]) {
        goUp()
    }
    if (keysPressed[DOWN]) {
        goDown()
    }
    draw(ctx)
    requestAnimationFrame(() => update(ctx))
}

export function addControls(ctx) {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    initialDraw(ctx)
    update(ctx)
}