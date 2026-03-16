class Title extends Phaser.Scene {
    constructor() {
        super("TitleScene");
    }

    preload() {
        // load images
        this.load.image('jetta', 'assets/images/jetta.jpg');
        this.load.image('totw', 'assets/images/TOTW.jpg');
        this.load.image('cigar', 'assets/images/TempCigar.jpeg');
        this.load.image('dutch', 'assets/images/Dutch.webp');
        this.load.image('hampter', 'assets/images/hampter.gif');
        this.load.image('vwlogo', 'assets/images/vwlogo.png');

        // load audio
        this.load.audio('click', 'assets/audio/buttonclick.mp3');
        this.load.audio('carbg', 'assets/audio/carbg.mp3');

        // load bitmap font
        this.load.bitmapFont('blackcoffee', 'assets/text/blackcoffee.png', 'assets/text/blackcoffee.xml');    }
    
    create() {
        // temp text
        this.add.text(20, 20, "Title Scene", { font: "25px Arial", fill: "yellow" });

        // Temp buttons to swap scenes
        let carButton = this.add.text(20, 100, "Go to Car Scene", { font: "20px Arial", fill: "white" });
        carButton.setInteractive();
        carButton.on('pointerover', () => { this.input.setDefaultCursor('pointer'); });
        carButton.on('pointerout', () => { this.input.setDefaultCursor('default'); });
        carButton.on('pointerdown', () => {
            this.sound.play('click');
            this.scene.start('CarScene');
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