let pauseScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function pauseScene ()
    {
        Phaser.Scene.call(this, { key: 'pauseScene' });
    },

    resume: function() {
        game_params.game.scene.resume("mapScene");
        this.lbl.destroy();
    },

    create: function ()
    {
        this.lbl = this.add.text(60, 170, "GAME PAUSED\nPress space to\ncontinue ..", 
                        { font: '30px Courier', fill: '#0000dd'  });
        this.input.keyboard.once('keydown-SPACE', this.resume, this);
        this.events.on('shutdown', this.shutdown, this);
    },

	shutdown: function() { 
        this.input.keyboard.shutdown(); 
    }
});

export default pauseScene; 