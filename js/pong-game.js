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
var cursors;
var paddle;
var blocks;
var ball;


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
    paddle = this.physics.add.image(300, 750, 'paddle').setImmovable().setCollideWorldBounds(true);
    ball = this.physics.add.image(300, 400, 'ball').setCollideWorldBounds(true).setBounce(1);
    blocks = this.physics.add.staticGroup();

    for(var j = 1; j <=7; j++)
    {
        for(var i = 0; i<8; i++)
        {
            blocks.create(39 + 74*i, j*19 + 12, 'block' + j);
        }
    }

    this.physics.world.setBoundsCollision(true, true, true, false);
    this.physics.add.collider(ball, paddle, hitPaddle, null);
    this.physics.add.collider(ball, blocks, hitBlock, null);
    ball.setVelocity(-75, -300);

    cursors = this.input.keyboard.createCursorKeys();
}

function update()
{
    if(cursors.left.isDown)
    {
        paddle.setVelocityX(-320);
    }
    else if(cursors.right.isDown)
    {
        paddle.setVelocityX(320);
    }
    else
    {
        paddle.setVelocityX(0);
    }

    if(ball.y > 800)
    {
        resetBall();
    }
}

function resetBall()
{
    ball.setVelocityX(150);
    ball.setPosition(paddle.x, 400);
}

function hitBlock(ball, block)
{
    block.disableBody(true, true);

    if(blocks.countActive() === 0)
    {
        blocks.children.each(function (brick){
            brick.enableBody(false, 0, 0, true, true);
        })
        resetBall();
    }
}

function hitPaddle(ball, paddle)
{
    var delta = 0;

    if(ball.x < paddle.x)
    {
        delta = paddle.x - ball.x;
        ball.setVelocityX(-12 * delta);
    }
    else if (ball.x > paddle.x)
    {
        delta = ball.x - paddle.x;
        ball.setVelocityX(12 * delta);
    }
    else
    {
        ball.setVelocityX(2 + Math.random() * 8);
    }
}