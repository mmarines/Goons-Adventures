class Car extends Phaser.Scene {
    constructor() {
        super("CarScene");
    }
    
    create() {
        // Add background image
        this.add.image(0, 0, 'jetta').setOrigin(0, 0).setDisplaySize(800, 600);

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

        // Track interactions
        this.interacted = { dutch: false, hampter: false, vwlogo: false, fvkd: false, sharktat: false, polkadot: false };

        // Add Bron Bron
        let hampter = this.add.image(this.game.config.width / 2 + 20, this.game.config.height - 50, 'hampter').setScale(0.1);
        hampter.setInteractive();
        hampter.on('pointerover', () => { this.input.setDefaultCursor('pointer'); });
        hampter.on('pointerout', () => { this.input.setDefaultCursor('default'); });
        hampter.on('pointerdown', () => {
            this.sound.play('click');
            if (this.dialogueBox) {
                // destroy dialogue box on second click
                this.dialogueBox.destroy();
                this.dialogueText.destroy();
                this.dialogueBox = null;
                this.dialogueText = null;
                // Check if all objects interacted and tween to TOTW
                if (Object.values(this.interacted).every(v => v)) {
                    this.cameras.main.fadeOut(1000, 0, 0, 0);
                    this.time.delayedCall(1000, () => this.scene.start('TOTWScene'));
                }
            } else {
                // create dialogue box
                this.interacted.hampter = true;
                let graphics = this.add.graphics();
                graphics.fillStyle(0x000000, 0.6);
                graphics.fillRect(100, this.game.config.height - 120, 600, 100);
                graphics.lineStyle(5, 0x0000ff);
                graphics.strokeRect(100, this.game.config.height - 120, 600, 100);
                this.dialogueBox = graphics;
                this.dialogueText = this.add.bitmapText(this.game.config.width / 2, this.game.config.height - 70, 'blackcoffee', "What's up Bron Bron! Don't worry Bron we're gonna liberate you...", 24).setOrigin(0.5).setMaxWidth(580);
            }
        });

        // Add Dutch Bros coffee
        let dutch = this.add.image(this.game.config.width / 2 + 20, 450, 'dutch').setScale(0.25);
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
                // Check if all objects interacted and tween to TOTW
                if (Object.values(this.interacted).every(v => v)) {
                    this.cameras.main.fadeOut(1000, 0, 0, 0);
                    this.time.delayedCall(1000, () => this.scene.start('TOTWScene'));
                }
            } else {
                this.interacted.dutch = true;
                let graphics = this.add.graphics();
                graphics.fillStyle(0x000000, 0.6);
                graphics.fillRect(100, 480, 600, 100);
                graphics.lineStyle(5, 0x0000ff);
                graphics.strokeRect(100, 480, 600, 100);
                this.dialogueBox = graphics;
                this.dialogueText = this.add.bitmapText(400, 530, 'blackcoffee', "Damnn bro this biscoff breve is fucking amazing! Wanna hit Unc's after?", 24).setOrigin(0.5).setMaxWidth(580);
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
                // Check if all objects interacted and tween to TOTW
                if (Object.values(this.interacted).every(v => v)) {
                    this.cameras.main.fadeOut(1000, 0, 0, 0);
                    this.time.delayedCall(1000, () => this.scene.start('TOTWScene'));
                }
            } else {
                this.interacted.vwlogo = true;
                let graphics = this.add.graphics();
                graphics.fillStyle(0x000000, 0.6);
                graphics.fillRect(100, this.game.config.height - 120, 600, 100);
                graphics.lineStyle(5, 0x0000ff);
                graphics.strokeRect(100, this.game.config.height - 120, 600, 100);
                this.dialogueBox = graphics;
                this.dialogueText = this.add.bitmapText(this.game.config.width / 2, this.game.config.height - 70, 'blackcoffee', "Welcome to KBandz Volskwagen, Model: HellJetta", 24).setOrigin(0.5).setMaxWidth(580);
            }
        });

        // Add FVKD cart
        let fvkd = this.add.image(this.game.config.width - 100, 380, 'fvkd').setScale(0.5).setAngle(-15);
        fvkd.setInteractive();
        fvkd.on('pointerover', () => { this.input.setDefaultCursor('pointer'); });
        fvkd.on('pointerout', () => { this.input.setDefaultCursor('default'); });
        fvkd.on('pointerdown', () => {
            this.sound.play('click');
            if (this.dialogueBox) {
                this.dialogueBox.destroy();
                this.dialogueText.destroy();
                this.dialogueBox = null;
                this.dialogueText = null;
                // Check if all objects interacted and tween to TOTW
                if (Object.values(this.interacted).every(v => v)) {
                    this.cameras.main.fadeOut(1000, 0, 0, 0);
                    this.time.delayedCall(1000, () => this.scene.start('TOTWScene'));
                }
            } else {
                this.interacted.fvkd = true;
                let graphics = this.add.graphics();
                graphics.fillStyle(0x000000, 0.6);
                graphics.fillRect(100, this.game.config.height - 120, 600, 100);
                graphics.lineStyle(5, 0x0000ff);
                graphics.strokeRect(100, this.game.config.height - 120, 600, 100);
                this.dialogueBox = graphics;
                this.dialogueText = this.add.   bitmapText(this.game.config.width / 2, this.game.config.height - 70, 'blackcoffee', "Remember how we met? If it wasn't for this brand we would've never known each other.", 24).setOrigin(0.5).setMaxWidth(580);
            }
        });

        // Add shark tattoo
        let sharktat = this.add.image(250, 470, 'sharktat').setScale(0.3).setAngle(45);
        sharktat.setInteractive();
        sharktat.on('pointerover', () => { this.input.setDefaultCursor('pointer'); });
        sharktat.on('pointerout', () => { this.input.setDefaultCursor('default'); });
        sharktat.on('pointerdown', () => {
            this.sound.play('click');
            if (this.dialogueBox) {
                this.dialogueBox.destroy();
                this.dialogueText.destroy();
                this.dialogueBox = null;
                this.dialogueText = null;
                // Check if all objects interacted and tween to TOTW
                if (Object.values(this.interacted).every(v => v)) {
                    this.cameras.main.fadeOut(1000, 0, 0, 0);
                    this.time.delayedCall(1000, () => this.scene.start('TOTWScene'));
                }
            } else {
                this.interacted.sharktat = true;
                let graphics = this.add.graphics();
                graphics.fillStyle(0x000000, 0.6);
                graphics.fillRect(100, this.game.config.height - 120, 600, 100);
                graphics.lineStyle(5, 0x0000ff);
                graphics.strokeRect(100, this.game.config.height - 120, 600, 100);
                this.dialogueBox = graphics;
                this.dialogueText = this.add.bitmapText(this.game.config.width / 2, this.game.config.height - 70, 'blackcoffee', "That one girl brought us closer together than we thought. Cheers to the Bakhet signature.", 24).setOrigin(0.5).setMaxWidth(580);
            }
        });

        // Add polkadot bar
        let polkadot = this.add.image(this.game.config.width - 250, this.game.config.height - 450, 'polkadot').setScale(0.4);
        polkadot.setInteractive();
        polkadot.on('pointerover', () => { this.input.setDefaultCursor('pointer'); });
        polkadot.on('pointerout', () => { this.input.setDefaultCursor('default'); });
        polkadot.on('pointerdown', () => {
            this.sound.play('click');
            if (this.dialogueBox) {
                this.dialogueBox.destroy();
                this.dialogueText.destroy();
                this.dialogueBox = null;
                this.dialogueText = null;
                // Check if all objects interacted and tween to TOTW
                if (Object.values(this.interacted).every(v => v)) {
                    this.cameras.main.fadeOut(1000, 0, 0, 0);
                    this.time.delayedCall(1000, () => this.scene.start('TOTWScene'));
                }
            } else {
                this.interacted.polkadot = true;
                let graphics = this.add.graphics();
                graphics.fillStyle(0x000000, 0.6);
                graphics.fillRect(100, this.game.config.height - 120, 600, 100);
                graphics.lineStyle(5, 0x0000ff);
                graphics.strokeRect(100, this.game.config.height - 120, 600, 100);
                this.dialogueBox = graphics;
                this.dialogueText = this.add.bitmapText(this.game.config.width / 2, this.game.config.height - 70, 'blackcoffee', "I really need to piss bro, I don't know if I can hold it in for the scenic piss.", 24).setOrigin(0.5).setMaxWidth(580);
            }
        });
    }
}