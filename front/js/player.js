import { 
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
    PLAYER_SIZE, 
    PLAYER_STEP 
} from './settings.js'


export class Player {


    constructor(ctx) {
        this.ctx = ctx
        this.size = PLAYER_SIZE
        this.step = PLAYER_STEP
        this.x = (CANVAS_WIDTH - this.size) / 2
        this.y = CANVAS_HEIGHT - this.size
        this.updateXX()
        this.updateYY()
    }


    updateX() {
        this.x = this.xx - this.size
    }

    
    updateY() {
        this.y = this.yy - this.size
    }


    updateXX() {
        this.xx = this.x + this.size
    }

    
    updateYY() {
        this.yy = this.y + this.size
    }


    draw() {
        this.ctx.fillRect(this.x, this.y, this.size, this.size)
    }


    goLeft(delta) {
        if (this.x == 0) return
        this.x = Math.max(0, this.x - this.step * delta)
        this.updateXX()
    }


    goRight(delta) {
        if (this.xx == CANVAS_WIDTH) return
        this.xx = Math.min(CANVAS_WIDTH, this.xx + this.step * delta)
        this.updateX()
    }
    

    goUp(delta) {
        if (this.y == 0) return
        this.y = Math.max(0, this.y - this.step * delta)
        this.updateYY()
    }


    goDown(delta) {
        if (this.yy == CANVAS_HEIGHT) return
        this.yy = Math.min(CANVAS_HEIGHT, this.yy + this.step * delta)
        this.updateY()
    }


}