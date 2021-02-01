import 'phaser'
import gameConfig from '../../config';

let startMenu = new Phaser.Class({

    Extends: Phaser.Scene,

	initialize: function startMenu() {
		Phaser.Scene.call(this, 'startMenu');
    },
    
    start: function(){ 
        if(game_params.player){
            game_params.player.x = 50;
            game_params.player.y =  450;
        }
        this.scene.start('mapScene', { id: 1, z: CONFIG.Z, col: CONFIG.COL , row: CONFIG.ROW });
    },

    create: function ()
    {
        const gameTitle = 'Shoppen in Antwerpen';
        this.add.text(20, 10, gameTitle, { font: '40px Courier', fill: '#32fc43' });

        let lbl1 =  art1 + '\n> Press any key to start ...';
        let lbl2 =  art2 + '\n  Press any key to start ...';
        let c = 0;
        let lbl;

        this.interv = setInterval(()=> {
            c++;
            if (lbl) { lbl.destroy(); }
            if( c%2 ) { lbl = this.add.text(10, 70, lbl1, { font: '20px Courier', fill: '#32fc43' }); }
            else { lbl = this.add.text(10, 70, lbl2, { font: '20px Courier', fill: '#32fc43' }); }
        }, 250)

        this.input.keyboard.on('keydown', this.start, this);
        this.input.on( 'pointerup', this.start, this);    
        this.events.on('shutdown', this.shutdown, this);
    },

	shutdown: function() { 
        clearInterval(this.interv);
        this.input.keyboard.shutdown(); 
    }

});


let art1 = `




`
let art2 = `




`


export default startMenu; 