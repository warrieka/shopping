
export function gameWon(game) {
	game_params.game.scene.pause('mapScene');
	game_params.score = 0;

	let c = 0;
	let winMsg = null;

	let iv = setInterval(() => {
		c++;
		if (c > 10) { clearInterval(iv); }
		if (winMsg)
			winMsg.destroy();
		winMsg = game.add.text(250 - c * 10, 260, 'Gewonnen',
			{ font: `${c * 5}px Courier`, fill: '#ff0000' });
	}, 150);

	setTimeout(() => game.scene.start('startMenu'), 3000);
}
