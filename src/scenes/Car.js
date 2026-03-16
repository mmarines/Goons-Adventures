class Car extends Phaser.Scene {
    constructor() {
        super("CarScene");
    }
    
    create() {
        // Add background image & text
        this.add.image(0, 0, 'jetta').setOrigin(0, 0).setDisplaySize(800, 600);

        

        this.add.text(20, 20, "Car Scene", { font: "25px Arial", fill: "yellow" });

        // Play background music
        if (!this.bgm) {
            this.bgm = this.sound.add('carbg', {
                volume: 0.1,
                loop: true,
                mute: false,
                rate: 1,
                
            });
            this.bgm.play();
        } else if (!this.bgm.isPlaying) {
            this.bgm.play();
        }

        // Initialize dialogue box
        this.dialogueBox = null;
        this.dialogueText = null;

        // Add hampter GIF
        let hampter = this.add.image(this.game.config.width / 2 + 20, this.game.config.height - 50, 'hampter').setScale(0.1);
        hampter.setInteractive();
        hampter.on('pointerover', () => { this.input.setDefaultCursor('pointer'); });
        hampter.on('pointerout', () => { this.input.setDefaultCursor('default'); });
        hampter.on('pointerdown', () => {
            this.sound.play('click');
            if (this.dialogueBox) {
                this.dialogueBox.destroy();
                this.dialogueText.destroy();
                this.dialogueBox = null;
                this.dialogueText = null;
            } else {
                let graphics = this.add.graphics();
                graphics.fillStyle(0x000000, 0.6);
                graphics.fillRect(100, this.game.config.height - 120, 600, 100);
                graphics.lineStyle(5, 0x0000ff);
                graphics.strokeRect(100, this.game.config.height - 120, 600, 100);
                this.dialogueBox = graphics;
                this.dialogueText = this.add.bitmapText(this.game.config.width / 2, this.game.config.height - 70, 'blackcoffee', "You found the hampster! It's so cute and fluffy!", 20).setOrigin(0.5);
                this.dialogueText.setWordWrapWidth(580);
            }
        });

        // Add Dutch Bros coffee
        let dutch = this.add.image(420, 450, 'dutch').setScale(0.25);
        let frame = this.textures.getFrame('dutch');
        dutch.setCrop(0, 0, frame.width, frame.height / 2);
        dutch.setInteractive();
        dutch.on('pointerover', () => { this.input.setDefaultCursor('pointer'); });
        dutch.on('pointerout', () => { this.input.setDefaultCursor('default'); });
        dutch.on('pointerdown', () => {
            this.sound.play('click');
            if (this.dialogueBox) {
                this.dialogueBox.destroy();
                this.dialogueText.destroy();
                this.dialogueBox = null;
                this.dialogueText = null;
            } else {
                let graphics = this.add.graphics();
                graphics.fillStyle(0x000000, 0.6);
                graphics.fillRect(100, 480, 600, 100);
                graphics.lineStyle(5, 0x0000ff);
                graphics.strokeRect(100, 480, 600, 100);
                this.dialogueBox = graphics;
                this.dialogueText = this.add.bitmapText(400, 530, 'blackcoffee', "Damnn bro this biscoff breve is fucking amazing!", 24).setOrigin(0.5);
                this.dialogueText.setWordWrapWidth(580);
            }
        });

        // Add VW logo on steering wheel
        let vwlogo = this.add.image(215, this.game.config.height / 2 - 50, 'vwlogo').setScale(0.02);
        vwlogo.setInteractive();
        vwlogo.on('pointerover', () => { this.input.setDefaultCursor('pointer'); });
        vwlogo.on('pointerout', () => { this.input.setDefaultCursor('default'); });
        vwlogo.on('pointerdown', () => {
            this.sound.play('click');
            if (this.dialogueBox) {
                this.dialogueBox.destroy();
                this.dialogueText.destroy();
                this.dialogueBox = null;
                this.dialogueText = null;
            } else {
                let graphics = this.add.graphics();
                graphics.fillStyle(0x000000, 0.6);
                graphics.fillRect(100, this.game.config.height - 120, 600, 100);
                graphics.lineStyle(5, 0x0000ff);
                graphics.strokeRect(100, this.game.config.height - 120, 600, 100);
                this.dialogueBox = graphics;
                this.dialogueText = this.add.bitmapText(this.game.config.width / 2, this.game.config.height - 70, 'blackcoffee', "Welcome to KBandz Volskwagen, Model: HellJetta", 20).setOrigin(0.5);
                this.dialogueText.setWordWrapWidth(580);
            }
        });
        
        // Temp button to swap scenes
        let titleButton = this.add.text(20, 100, "Go to Title Scene", { font: "20px Arial", fill: "white" });
        titleButton.setInteractive();
        titleButton.on('pointerover', () => { this.input.setDefaultCursor('pointer'); });
        titleButton.on('pointerout', () => { this.input.setDefaultCursor('default'); });
        titleButton.on('pointerdown', () => { 
            this.sound.play('click');
            this.scene.start('TitleScene');
        });

        let totwButton = this.add.text(20, 150, "Go to TOTW Scene", { font: "20px Arial", fill: "white" });
        totwButton.setInteractive();
        totwButton.on('pointerover', () => { this.input.setDefaultCursor('pointer'); });
        totwButton.on('pointerout', () => { this.input.setDefaultCursor('default'); });
        totwButton.on('pointerdown', () => {
            this.sound.play('click');
            this.scene.start('TOTWScene');
        });
    }
}