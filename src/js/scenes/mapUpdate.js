import "phaser";

export default function update ()
{
	game_params.cursors = this.input.keyboard.createCursorKeys();

	this.input.keyboard.once('keydown-SPACE', function () {
		this.scene.pause();
		this.scene.launch('pauseScene');

	}, this);

	if (game_params.cursors.left.isDown)
	{
		game_params.player.rotation = 0;
		game_params.player.setVelocityX(-160);
		game_params.player.anims.play('left', true);
	}
	else if (game_params.cursors.right.isDown)
	{
		game_params.player.rotation = 0;
		game_params.player.setVelocityX(160);
		game_params.player.anims.play('right', true);
	}
	else if (game_params.cursors.up.isDown)
	{
		game_params.player.setVelocityY(-160);
		game_params.player.rotation = - Math.PI / 2 
		game_params.player.anims.play('left', true);
	}
	else if (game_params.cursors.down.isDown)
	{
		game_params.player.rotation =  Math.PI / 2 
		game_params.player.setVelocityY(160);
		game_params.player.anims.play('right', true);
	}
	else
	{
		game_params.player.setVelocity(0,0);
		game_params.player.anims.play('turn');
	}

	let pointer = this.input.activePointer;
	let velocity = new Phaser.Math.Vector2();
	if (pointer.isDown) {
		let angleTo = Phaser.Math.Angle.BetweenPoints(game_params.player, pointer);
		this.physics.velocityFromRotation(angleTo, 160, velocity);
		game_params.player.setVelocity(velocity.x, velocity.y);
		game_params.player.anims.play('right', true);
		game_params.player.rotation = angleTo;
	}

}
