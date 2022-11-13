export class Layer {
    #image
    #imageXPosition
    #speedModifier

    constructor(image, speedModifier) {
        this.#image = image
        this.#speedModifier = speedModifier
        this.#imageXPosition = 0;
    }

    get layerWidth() {
        return this.#image.width
    }

    get image() {
        return this.#image
    }

    get imageXPosition() {
        return this.#imageXPosition
    }

    nextFrame(gameSpeed) {
        if (this.#imageXPosition <= -this.layerWidth) {
            this.#imageXPosition = 0
        } else {
            this.#imageXPosition -= gameSpeed * this.#speedModifier
        }
    }

}