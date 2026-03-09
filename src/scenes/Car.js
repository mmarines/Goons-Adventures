class Car extends Phaser.Scene {
    constructor() {
        super("CarScene");
    }
    
    create() {
        // Add background image & text
        this.add.image(0, 0, 'jetta').setOrigin(0, 0).setDisplaySize(800, 600);
        this.add.text(20, 20, "Car Scene", { font: "25px Arial", fill: "yellow" });

        // Initialize dialogue box
        this.dialogueBox = null;
        this.dialogueText = null;

        // Add Dutch Bros coffee
        let dutch = this.add.image(400, 480, 'dutch').setScale(0.25);
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
                this.dialogueText = this.add.text(400, 530, "Damnn bro this biscoff breve is fucking amazing!", { font: "18px Arial", fill: "white" }).setOrigin(0.5);
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