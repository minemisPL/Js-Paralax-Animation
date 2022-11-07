import {config} from "./data.js";
import {backgroundLayers} from "./data.js";
import {Layer} from "./Layer.js";
import {animateScene} from "./animation.js";
import {speedController} from "./SpeedController.js";

const canvas = document.getElementById('canvas1');
const canvasContext = canvas.getContext('2d');

const button = document.getElementById("clickMe");

button.addEventListener("click", () => {
    speedController.speed += 10
})

canvas.width = config.canvasWidth;
canvas.height = config.canvasHeight;

const layers = backgroundLayers.map((layer) => {
    return new Layer(layer.image, layer.speedModifier, config.bcWidth);
})

animateScene(canvasContext, config, layers, speedController.speed);
