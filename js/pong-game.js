const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 800,
    parent: 'asteroids-game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var paddle;
var blocks;


function preload()
{
    this.load.image('background', 'assets/background600x800.png');
}

function create()
{
    this.add.image(300, 400, 'background');
}

function update()
{

}