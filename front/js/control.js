import {
    CONTROL_LEFT,
    CONTROL_RIGHT,
    CONTROL_UP,
    CONTROL_DOWN
} from './settings.js'


export class Control {


    constructor(player) {
        this.player = player
        this.pressed = new Map()
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.init()
    }


    init() {
        document.addEventListener('keydown', this.handleKeyDown)
        document.addEventListener('keyup', this.handleKeyUp)
    }


    handleKeyDown(event) {
        this.pressed.set(event.key, true)
    }


    handleKeyUp(event) {
        this.pressed.delete(event.key)
    }


    clear() {
        this.pressed.clear()
    }


    update(delta) {
        const left  = this.pressed.get(CONTROL_LEFT)
        const right = this.pressed.get(CONTROL_RIGHT)
        const up    = this.pressed.get(CONTROL_UP)
        const down  = this.pressed.get(CONTROL_DOWN)

        if (left)  this.player.goLeft(delta)
        if (right) this.player.goRight(delta)
        if (up)    this.player.goUp(delta)
        if (down)  this.player.goDown(delta)
    }


}