class TOTW extends Phaser.Scene {
    constructor() {
        super("TOTWScene");
    }
    
    create() {
        // Add background image
        this.add.image(0, 0, 'totw').setOrigin(0, 0).setDisplaySize(800, 600);

        // Initialize dialogue box
        this.dialogueBox = null;
        this.dialogueText = null;
        this.isCigarDialogueOpen = false;

        // opening dialogue
        this.dialogueBox = this.add.graphics();
        this.dialogueBox.fillStyle(0x000000, 0.8);
        this.dialogueBox.fillRect(100, 480, 600, 100);
        this.dialogueBox.lineStyle(5, 0x0000ff);
        this.dialogueBox.strokeRect(100, 480, 600, 100);
        this.dialogueText = this.add.bitmapText(400, 530, 'blackcoffee', "I almost pissed myself bro...", 24).setOrigin(0.5).setMaxWidth(580);
        
        // Make the dialogue area clickable to close
        let closeArea = this.add.rectangle(400, 530, 600, 100);
        closeArea.setInteractive();
        closeArea.on('pointerdown', () => {
            this.sound.play('click');
            this.dialogueBox.destroy();
            this.dialogueText.destroy();
            closeArea.destroy();
            this.dialogueBox = null;
            this.dialogueText = null;
        });

        // Create smoke texture
        let smokeGraphics = this.add.graphics();
        smokeGraphics.fillStyle(0xffffff, 0.3);
        smokeGraphics.fillCircle(4, 4, 4);
        this.smokeTexture = smokeGraphics.generateTexture('smoke', 12, 12);

        // Create smoke emitter
        this.smokeEmitter = this.add.particles(0, 0, 'smoke', {
            speed: { min: 20, max: 50 },
            angle: { min: -15, max: -110 },
            scale: { start: 1.5, end: 0 },
            lifespan: 2000,
            alpha: { start: 0.8, end: 0 },
            quantity: 3,
            frequency: 50
        });
        this.smokeEmitter.setDepth(10);
        this.smokeEmitter.stop();

        // Add cigar
        this.cigar = this.add.image(this.game.config.width - 150, 400, 'cigar').setScale(0.3).setAngle(-60);
        this.cigar.setInteractive();
        this.cigar.on('pointerover', () => { this.input.setDefaultCursor('pointer'); });
        this.cigar.on('pointerout', () => { this.input.setDefaultCursor('default'); });
        this.cigar.on('pointerdown', () => {
            this.sound.play('click');
            if (this.dialogueBox) {
                this.dialogueBox.destroy();
                this.dialogueText.destroy();
                this.dialogueBox = null;
                this.dialogueText = null;
                this.smokeEmitter.stop();

                if (this.isCigarDialogueOpen) {
                    this.isCigarDialogueOpen = false;
                    this.cameras.main.fadeOut(1000, 0, 0, 0);
                    this.time.delayedCall(1000, () => {
                        this.scene.start('FinishScene');
                    });
                }
            } else {
                this.isCigarDialogueOpen = true;
                // change bgm
                this.sound.stopByKey('carbg');
                this.bgm = this.sound.add('losbgm', { volume: 0.5, loop: true });
                this.bgm.play();
                // start particles
                this.smokeEmitter.setPosition(this.cigar.x - 25, this.cigar.y - 70);
                this.smokeEmitter.start();
                let graphics = this.add.graphics();
                graphics.fillStyle(0x000000, 0.6);
                graphics.fillRect(100, 480, 600, 100);
                graphics.lineStyle(5, 0x0000ff);
                graphics.strokeRect(100, 480, 600, 100);
                this.dialogueBox = graphics;
                this.dialogueText = this.add.bitmapText(400, 530, 'blackcoffee', "What a view man, you feel that warm summer breeze?", 24).setOrigin(0.5).setMaxWidth(580);
            }
        });

        // Clean up audio on scene shutdown
        this.events.on('shutdown', () => {
            this.sound.stopByKey('losbgm');
        });
    }
}