import { PointLight} from "three";
//need to import createRender for shadow

function createLight() {

    const light = new PointLight(
        0xffffff,
        0.5
    );

    light.position.set(1, 1, 10);

    return light;
    
}

export { createLight };