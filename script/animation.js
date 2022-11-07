import {speedController} from "./SpeedController.js";

export const animateScene = (canvasContext, config, layers) => {
    canvasContext.clearRect(0, 0, config.canvasWidth, config.canvasHeight)

    const gameSpeed = speedController.speed;

    layers.forEach((layer) => {
        animateLayer(layer, canvasContext, config.canvasWidth, gameSpeed)
    })

    requestAnimationFrame(() => {
        animateScene(canvasContext, config, layers, gameSpeed)
    });
}

const animateLayer = (layer, canvasContext, canvasWidth, gameSpeed) => {
    canvasContext.drawImage(layer.image, layer.x, 0);

    if (layer.x <= -layer.layerWidth + canvasWidth) {
        canvasContext.drawImage(layer.image, layer.x + layer.layerWidth, 0);
    }

    layer.nextFrame(gameSpeed)
}