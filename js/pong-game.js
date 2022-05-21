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
    this.load.image('block1', 'assets/yellow-block.png');
    this.load.image('block2', 'assets/red-block.png');
    this.load.image('block3', 'assets/pink-block.png');
    this.load.image('block4', 'assets/orange-block.png');
    this.load.image('block5', 'assets/lightblue-block.png');
    this.load.image('block6', 'assets/grey-block.png');
    this.load.image('block7', 'assets/darkblue-block.png');
    this.load.image('ball', 'assets/ball.png');
}

function create()
{
    this.add.image(300, 400, 'background');
    paddle = this.physics.add.sprite(300, 750, 'paddle');
    ball = this.physics.add.sprite(300, 400, 'ball');
    blocks = this.physics.add.staticGroup();

    for(var j = 1; j <=7; j++)
    {
        for(var i = 0; i<8; i++)
        {
            blocks.create(39 + 74*i, j*19 + 12, 'block' + j);
        }
    }

}

function update()
{

}