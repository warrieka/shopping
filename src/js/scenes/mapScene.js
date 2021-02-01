import 'phaser'
import createMap from './mapCreate.js'
import updateMap from './mapUpdate.js'
import map from '../utils/mapUtils.js'

var mapScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:  function mapScene ()
    {
        Phaser.Scene.call(this, 'mapScene' );
    },

    init: function (data)
    {
        this.imageID = data.id;
        this.col = data.col;
        this.row = data.row;
        this.z = data.z; 
        this.gameMap = new map(data.z, data.col, data.row);
    },

    preload: function ()
    {
        this.load.image('map' + this.imageID, this.gameMap.url);
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.image('virus', 'assets/virus.png');
        this.load.spritesheet('dude', 
            'assets/dude.png', { frameWidth: 32, frameHeight: 48 }
        );
    },

    create: createMap,

    update: updateMap

});
export default mapScene; 