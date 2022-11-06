import {config} from "./data.js";
import {backgroundLayers} from "./data.js";

const canvas = document.getElementById('canvas1');
const canvasContext = canvas.getContext('2d');

canvas.width = config.canvasWidth;
canvas.height = config.canvasHeight;

let gameSpeed = 0;
let x = 0

const animate = () => {
    canvasContext.clearRect(0, 0, config.canvasWidth, config.canvasHeight)

    let backgroundLayer = 3;

    canvasContext.drawImage(backgroundLayers[backgroundLayer], x, 0);

    if (x <= -config.bcWidth + config.canvasWidth) {
        canvasContext.drawImage(backgroundLayers[backgroundLayer], x + config.bcWidth, 0);
    }

    if (x <= -config.bcWidth) {
        x = 0;
    } else {
        x -= gameSpeed;
    }

    requestAnimationFrame(animate);
}

animate();