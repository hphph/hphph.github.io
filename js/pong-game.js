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
    this.load.image('yellow-block', 'assets/yellow-block.png');
    this.load.image('red-block', 'assets/red-block.png');
    this.load.image('pink-block', 'assets/pink-block.png');
    this.load.image('orange-block', 'assets/orange-block.png');
    this.load.image('lightblue-block', 'assets/lightblue-block.png');
    this.load.image('grey-block', 'assets/grey-block.png');
    this.load.image('darkblue-block', 'assets/darkblue-block.png');
    this.load.image('ball', 'assets/ball.png');
}

function create()
{
    this.add.image(300, 400, 'background');
    paddle = this.physics.add.sprite(300, 750, 'paddle');
    ball = this.physics.add.sprite(300, 400, 'ball');
    blocks = this.physics.add.staticGroup();

    for(var i = 1; i<=8; i++)
    {
        blocks.create(4*i + 35*i, 12, 'yellow-block');
    }

}

function update()
{

}