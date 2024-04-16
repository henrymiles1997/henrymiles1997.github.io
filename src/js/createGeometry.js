import { BoxGeometry } from "three";
import { MeshBasicMaterial } from "three";
import { Mesh } from "three";

function createGeometry() {

    const geometry = new BoxGeometry(2, 2, 2);

    const material = new MeshBasicMaterial();

    const cube = new Mesh(geometry, material);

    return cube;

}

export { createGeometry };