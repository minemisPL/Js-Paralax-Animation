import {speedController} from "./SpeedController.js";

export const animateScene = (canvasContext, config, layers) => {
    canvasContext.clearRect(0, 0, config.canvasWidth, config.canvasHeight)

    const gameSpeed = speedController.speed

    layers.forEach((layer) => {
        animateLayer(layer, canvasContext, config.canvasWidth, gameSpeed)
    })

    window.requestAnimationFrame(() => {
        animateScene(canvasContext, config, layers, gameSpeed)
    })
}

const animateLayer = (layer, canvasContext, canvasWidth, gameSpeed) => {
    canvasContext.drawImage(layer.image, layer.imageXPosition, 0)

    if (layer.imageXPosition <= -layer.layerWidth + canvasWidth) {
        canvasContext.drawImage(layer.image, layer.imageXPosition + layer.layerWidth, 0);
    }

    layer.nextFrame(gameSpeed)
}