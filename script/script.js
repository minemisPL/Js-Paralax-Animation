import {config} from "./data.js";
import {backgroundLayers} from "./data.js";
import {Layer} from "./Layer.js";
import {animateScene} from "./animation.js";
import {speedController} from "./SpeedController.js";

const canvas = document.getElementById('canvas1');
const canvasContext = canvas.getContext('2d');

const slider = document.getElementById("slider");
const showGameSpeed = document.getElementById('showGameSpeed');
speedController.speed = slider.value;
showGameSpeed.innerText = speedController.speed.toString();

slider.addEventListener("input", () => {
    speedController.speed = slider.value;
    showGameSpeed.innerText = speedController.speed.toString();
})

canvas.width = config.canvasWidth;
canvas.height = config.canvasHeight;

const layers = backgroundLayers.map((layer) => {
    return new Layer(layer.image, layer.speedModifier, config.bcWidth);
})

window.addEventListener('load', () => {
    animateScene(canvasContext, config, layers, speedController.speed);
})
