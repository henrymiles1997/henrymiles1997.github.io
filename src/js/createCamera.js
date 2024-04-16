import { PerspectiveCamera } from "three";

function createCamera() {

    const camera = new PerspectiveCamera(
        45,
        600 / 600,
        0.1,
        1000
    );

    camera.position.set(0, 0, 5);
    camera.rotation.set(0, 0, 0);

    return camera;
    
}

export { createCamera };