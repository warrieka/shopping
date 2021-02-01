import { gameWon } from "./gameWon";

const VICTORY_SCORE = 50;

export function stars(scene) {
	game_params.stars = scene.physics.add.group();

	var x0 = Math.floor(Math.random() * 512);
	var y0 = Math.floor(Math.random() * 512);
	var x1 = Math.floor(Math.random() * 512);
	var y1 = Math.floor(Math.random() * 512);
	var x2 = Math.floor(Math.random() * 512);
	var y2 = Math.floor(Math.random() * 512);

	game_params.stars.create(x0, y0, 'star');
	game_params.stars.create(x1, y1, 'star');
	game_params.stars.create(x2, y2, 'star');

/*
	scene.gameMap.getData( d => {
		d.forEach(e => {
			game_params.stars.create( e.x, e.y, 'star');
		});
	});
*/
	let collect = (_player, star) => {
		star.disableBody(true, true);
		game_params.score += 1;
		document.getElementById("score").innerHTML = game_params.score;
		if (game_params.score >= VICTORY_SCORE)
			gameWon(scene);
	};
	scene.physics.add.overlap(game_params.player, game_params.stars, collect, null, scene);
}
