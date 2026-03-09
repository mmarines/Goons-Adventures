class TOTW extends Phaser.Scene {
    constructor() {
        super("TOTWScene");
    }
    
    create() {
        // Add background image & text
        this.add.image(0, 0, 'totw').setOrigin(0, 0).setDisplaySize(800, 600);
        this.add.text(20, 20, "TOTW Scene", { font: "25px Arial", fill: "yellow" });

        // Initialize dialogue box
        this.dialogueBox = null;
        this.dialogueText = null;

        // Add temp cigar image
        let cigar = this.add.image(550, 350, 'cigar').setScale(0.5);
        cigar.setInteractive();
        cigar.on('pointerover', () => { this.input.setDefaultCursor('pointer'); });
        cigar.on('pointerout', () => { this.input.setDefaultCursor('default'); });
        cigar.on('pointerdown', () => {
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
                this.dialogueText = this.add.text(400, 530, "You found the temp cigar! We are going to smoke this later...", {
                    font: "18px Arial",
                    fill: "white"
                }).setOrigin(0.5);
            }
        });

        

        // Temp buttons to swap scenes
        let titleButton = this.add.text(20, 100, "Go to Title Scene", { font: "20px Arial", fill: "white" });
        titleButton.setInteractive();
        titleButton.on('pointerover', () => { this.input.setDefaultCursor('pointer'); });
        titleButton.on('pointerout', () => { this.input.setDefaultCursor('default'); });
        titleButton.on('pointerdown', () => {
            this.sound.play('click');
            this.scene.start('TitleScene');
        });

        let carButton = this.add.text(20, 150, "Go to Car Scene", { font: "20px Arial", fill: "white" });
        carButton.setInteractive();
        carButton.on('pointerover', () => { this.input.setDefaultCursor('pointer'); });
        carButton.on('pointerout', () => { this.input.setDefaultCursor('default'); });
        carButton.on('pointerdown', () => {
            this.sound.play('click');
            this.scene.start('CarScene');
        });
    }
}