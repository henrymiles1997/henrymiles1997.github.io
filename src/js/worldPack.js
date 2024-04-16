import { World } from "./worldConstruction.js";

function main() {

    const container = document.querySelector('#scene-container');

    const world = new World(container);

    world.render();

}

export default main();