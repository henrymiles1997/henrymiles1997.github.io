import { createCamera } from "./createCamera.js";
import { createLight } from "./createLight.js";
import { createGeometry } from "./createGeometry.js";
import { createHelper } from "./createHelper.js"; 

import { createScene } from "./createScene.js";
import { createRenderer } from "./createRenderer.js";

let camera;
let light;
let geometry;
let helper;

let scene;
let renderer;

class World {

    constructor(container) {

        camera = createCamera();
        light = createLight();
        geometry = createGeometry();
        scene = createScene();
        renderer = createRenderer();
        helper = createHelper();

        scene.add(geometry);

        container.append(renderer.domElement);

    }


    render() {

        renderer.render(scene, camera);
        
    }

}

export { World };