const CANVAS_WIDTH = 720
const CANVAS_HEIGHT = 720


const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d') 


canvas.width = CANVAS_WIDTH
canvas.height = CANVAS_HEIGHT


import { addControls } from './js/controls.js'


addControls(ctx)