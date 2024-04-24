import { World } from "./worldConstruction.js";
import { logoTransform } from "./svg.js";

function main() {

    const container = document.querySelector('#scene-container');

    const world = new World(container);

    world.render();

    logoTransform();

}

export default main()