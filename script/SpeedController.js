class SpeedController {
    _speed = 0;

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }
}

export const speedController = new SpeedController()