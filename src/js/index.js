import "phaser";
import config from "./config"

window.game_params = {
	cursors: null,
	player: null,
	stars: null,
	walking: false,
	score: 0,
	game: new Phaser.Game(config)
}
