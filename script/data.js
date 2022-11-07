export const config = {
    canvasWidth: 700,
    canvasHeight: 700,
    bcWidth: 2400,
    bcHeight: 720,
}

const getImage = (src) => {
    const image = new Image();
    image.src = src;
    return image;
}

export const backgroundLayers = [
    {
        image : getImage(`../media/background/layer-1.png`),
        speedModifier: 0.6
    },
    {
        image : getImage(`../media/background/layer-2.png`),
        speedModifier: 0.8
    },
    {
        image : getImage(`../media/background/layer-3.png`),
        speedModifier: 1.0
    },
    {
        image : getImage(`../media/background/layer-4.png`),
        speedModifier: 1.2
    },
    {
        image : getImage(`../media/background/layer-5.png`),
        speedModifier: 1.4
    },
]
