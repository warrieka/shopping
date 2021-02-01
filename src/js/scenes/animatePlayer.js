
export function animatePlayer(scene) {
	scene.anims.create({
		key: 'up',
		frames: scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
		frameRate: 10,
		repeat: -1
	});
	scene.anims.create({
		key: 'down',
		frames: scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
		frameRate: 10,
		repeat: -1
	});
	scene.anims.create({
		key: 'left',
		frames: scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
		frameRate: 10,
		repeat: -1
	});
	scene.anims.create({
		key: 'right',
		frames: scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
		frameRate: 10,
		repeat: -1
	});
	scene.anims.create({
		key: 'turn',
		frames: [{ key: 'dude', frame: 4 }],
		frameRate: 20
	});
}
