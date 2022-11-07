export class Layer {
    #image
    #speedModifier
    #layerWidth
    #x

    constructor(image, speedModifier, layerWidth) {
        this.#image = image;
        this.#speedModifier = speedModifier;
        this.#layerWidth = layerWidth;
        this.#x = 0;
        this._image = image;
        this._layerWidth = layerWidth;

    }

    get layerWidth() {
        return this._layerWidth;
    }

    get image() {
        return this._image;
    }

    get x() {
        return this.#x;
    }

    nextFrame(gameSpeed) {
        if (this.#x <= -this.#layerWidth) {
            this.#x = 0;
        } else {
            this.#x -= gameSpeed * this.#speedModifier;
        }
    }

}