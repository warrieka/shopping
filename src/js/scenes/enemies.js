import 'phaser'
import {gameLost} from './gameLost'

export class enemies {
    constructor(scene, nrEnemies, speed = 50) {
        this.scene = scene;
        let speed_increase = nrEnemies*5; 
        this.speed = speed + speed_increase;
        this.enemies = this.scene.physics.add.group();
        for (let i = 0; i < nrEnemies; i++) {
            this.enemies.create( 256, 256, 'virus' );
        }
        this.die();
    }

    die () {
        let collision = (player, enemy) =>  gameLost(this.scene);
        this.scene.physics.add.overlap(game_params.player, this.enemies, 
                                                             collision , null, this);
    }

    animate () {
        function  moveEnemies (scope) {
            scope.enemies.getChildren().forEach(enemy => {
                const randNumber = (Math.random() * 2) * Math.PI;
                let velocity = new Phaser.Math.Vector2();
                scope.scene.physics.velocityFromRotation(randNumber, scope.speed, velocity );
                enemy.body.setVelocity(velocity.x, velocity.y);
            });
        }

        this.timer = this.scene.time.addEvent({
            delay: 500,               
            callback: () => moveEnemies(this),
            loop: true
        });
    }

    stopEnemies () {
        this.enemies.body.setVelocityY(0); 
        this.enemies.setVelocityX(0);
    }
}

