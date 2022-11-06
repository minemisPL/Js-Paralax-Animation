export const config = {
    canvasWidth: 700,
    canvasHeight: 700,
    bcWidth: 2400,
    bcHeight: 720,
}

export const backgroundLayers = []

for (let i = 1; i <= 5; i++) {
    const image = new Image();
    image.src = `../media/background/layer-${i}.png`;

    backgroundLayers.push(image);
}

