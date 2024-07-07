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


function handleKeyDown(ctx, event) {
    
    const key = event.key

    switch (key) {

        case LEFT:
            goLeft()
            break

        case RIGHT:
            goRight()
            break

        case UP:
            goUp()
            break

        case DOWN:
            goDown()
            break

    }

    draw(ctx)

}


export function addControls(ctx) {

    document.addEventListener(

        'keydown', 
        (event) => handleKeyDown(ctx, event)
    
    )

    initialDraw(ctx)

}