import * as Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

/** @type {Phaser.Game} */
const game = new Phaser.Game(config);

/** @type {Phaser.Physics.Arcade.Sprite} */
let car;
// Texts
let vxText, vyText, velocityText;
// Controls
let controls;

function preload() {
    this.load.image('background', '/car-game/background.png');
    this.load.image('car', '/car-game/car.png');
}

function create() {
    this.add.sprite(0, 0, 'background').setOrigin(0, 0);

    car = this.physics.add
        .sprite(config.width / 2, config.height / 2, 'car')
        .setScale(0.5)
        .setCollideWorldBounds(true);

    this.add.rectangle(0, 0, 200, 100, 0x000000, 0.5).setOrigin(0, 0).setPosition(10, 10);
    const textConfig = {
        fontFamily: 'Verdana',
        fontSize: '24px',
        fontStyle: 'bold',
        fill: '#ffffff',
        shadow: { offsetX: 2, offsetY: 2, color: '#000000', blur: 4, stroke: true, fill: true }
    };
    vxText = this.add.text(20, 15, 'vx: 0', textConfig);
    vyText = this.add.text(20, 45, 'vy: 0', textConfig);
    velocityText = this.add.text(20, 75, 'velocity: 0', textConfig);

    controls = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.Z,
        left: Phaser.Input.Keyboard.KeyCodes.Q,
        down: Phaser.Input.Keyboard.KeyCodes.X,
        right: Phaser.Input.Keyboard.KeyCodes.D
    });

    this.scene.pause();

    // Listen for the 'slide changed' event to pause/resume the game
    document.addEventListener('slideChanged', (event) => {
        if (event.active) {
            this.scene.resume();
        } else {
            if (!this.scene.isPaused()) {
                this.scene.pause();
            }
        }
    });
}

function update() {
    console.log('UPDATE');
    let directions = [];

    // compute velocity and base angle
    if (controls.up.isDown) {
        directions.push('UP');
        car.setVelocityY(-200);
        car.setAngle(0);
    } else if (controls.down.isDown) {
        directions.push('DOWN');
        car.setVelocityY(200);
        car.setAngle(180);
    } else {
        car.setVelocityY(0);
    }

    if (controls.left.isDown) {
        directions.push('LEFT');
        car.setVelocityX(-200);
        car.setAngle(270);
    } else if (controls.right.isDown) {
        directions.push('RIGHT');
        car.setVelocityX(200);
        car.setAngle(90);
    } else {
        car.setVelocityX(0);
    }

    // compute angle
    if (directions.length > 0) {
        if (directions.indexOf('UP') >= 0) {
            if (directions.indexOf('LEFT') >= 0) {
                car.setAngle(-45);
            } else if (directions.indexOf('RIGHT') >= 0) {
                car.setAngle(45);
            }
        } else if (directions.indexOf('DOWN') >= 0) {
            if (directions.indexOf('LEFT') >= 0) {
                car.setAngle(-135);
            } else if (directions.indexOf('RIGHT') >= 0) {
                car.setAngle(135);
            }
        }
    }

    // update texts
    vxText.setText('vx: ' + car.body.velocity.x);
    vyText.setText('vy: ' + car.body.velocity.y);
    velocityText.setText(`velocity: ${Math.abs(car.body.velocity.x) + Math.abs(car.body.velocity.y)}`);
}
