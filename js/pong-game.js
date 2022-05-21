const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 800,
    parent: 'asteroids-game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
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
var ball;
var blocks;


function preload()
{
    this.load.image('background', 'assets/background600x800.png');
    this.load.image('paddle', 'assets/paddle.png');
    this.load.image('yellow-block', 'yellow-block.png');
    this.load.image('red-block', 'red-block.png');
    this.load.image('pink-block', 'pink-block.png');
    this.load.image('orange-block', 'orange-block.png');
    this.load.image('lightblue-block', 'lightblue-block.png');
    this.load.image('grey-block', 'grey-block.png');
    this.load.image('darkblue-block', 'darkblue-block.png');
    this.load.image('ball', 'ball.png');
}

function create()
{
    this.add.image(300, 400, 'background');
    paddle = this.physics.add.sprite(300, 700, 'paddle');
    ball = this.physics.add.sprite(300, 400, 'ball');

}

function update()
{

}