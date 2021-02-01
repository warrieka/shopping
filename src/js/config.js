import "phaser";
import menu from "./scenes/menus/startScene.js"
import mapScene from "./scenes/mapScene.js"
import pauseScene from "./scenes/menus/pauseScene.js"

window.CONFIG = {
    ROW:  134288,
    COL: 87514 ,
    Z : 18
}

const gameConfig = {
    type: Phaser.AUTO,
    width: 512,
    height: 512,
	parent: 'game',
    backgroundColor: "#0000ee",
	physics: {
        default: 'arcade'
    },
    scene: [menu, mapScene, pauseScene]
}
export default gameConfig;