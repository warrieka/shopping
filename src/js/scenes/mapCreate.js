import "phaser";
import { animatePlayer } from "./animatePlayer";
import { enemies } from "./enemies";
import { stars } from "./stars";

export default function create(){	
	this.add.image(0, 0, 'map' + this.imageID)
		.setOrigin(0, 0)
		.setScale(2);
	
	if(game_params.player == null){
		game_params.player = this.physics.add.sprite(50, 450, 'dude');
	}
	else {
		game_params.player = this.physics.add.sprite(game_params.player.x, game_params.player.y, 'dude');
	}
	game_params.player.setBounce(0.2);
	game_params.player.setCollideWorldBounds(true);
	game_params.player.body.onWorldBounds=true;

	this.physics.world.on('worldbounds', (body, up, down, left, right) =>{
		if (up){
			game_params.player.y = 480;
			this.scene.start('mapScene', { id: this.imageID +1, col:this.col, row: this.row - 1, z: this.z });
		}
		else if (down){
			game_params.player.y = 32;
			this.scene.start('mapScene', { id: this.imageID +1, col:this.col, row: this.row + 1, z: this.z });
		}
		else if (left){
			game_params.player.x = 480;
			this.scene.start('mapScene', { id: this.imageID +1, col:this.col -1, row: this.row , z: this.z });
		}
		else if (right){
			game_params.player.x = 32;
			this.scene.start('mapScene', { id: this.imageID +1, col:this.col +1, row: this.row , z: this.z });
		}
	});

	const myEnemies = new enemies(this, this.imageID ); 
    myEnemies.animate();
	animatePlayer(this);
	stars(this);
	
}


