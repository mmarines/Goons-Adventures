class Title extends Phaser.Scene {
    constructor() {
        super("TitleScene");
    }

    preload() {
        // load images
        this.load.image('jetta', 'assets/images/jetta.jpg');
        this.load.image('totw', 'assets/images/TOTW.jpg');
        this.load.image('cigar', 'assets/images/cigar.png');
        this.load.image('dutch', 'assets/images/Dutch.webp');
        this.load.image('hampter', 'assets/images/hampter.gif');
        this.load.image('vwlogo', 'assets/images/vwlogo.png');
        this.load.image('fvkd', 'assets/images/fvkd.png');
        this.load.image('sharktat', 'assets/images/sharktat.png');
        this.load.image('polkadot', 'assets/images/polkadot.webp');
        this.load.image('patrick', 'assets/images/patrick.jpg');
        this.load.video('hasbullaLaughing', 'assets/images/hasbulla-laughing.mp4', 'loadeddata', true, true);

        // load audio
        this.load.audio('click', 'assets/audio/buttonclick.mp3');
        this.load.audio('carbg', 'assets/audio/carbg.mp3');
        this.load.audio('hasbullaLaugh', 'assets/audio/hasbullalaugh.mp3');
        this.load.audio('losbgm', 'assets/audio/los.mp3');

        // load bitmap font
        this.load.bitmapFont('blackcoffee', 'assets/text/blackcoffee.png', 'assets/text/blackcoffee.xml');    }
    
    create() {
        // title + instruction + background
        this.add.image(0, 0, 'patrick').setOrigin(0, 0).setDisplaySize(this.scale.width, this.scale.height).setDepth(-1);        
        this.add.bitmapText(this.scale.width / 2, 40, 'blackcoffee', "Goon's Adventures", 48).setOrigin(0.5);
        this.add.bitmapText(this.scale.width / 2, this.scale.height / 2 - 60, 'blackcoffee', "Click on objects to interact with them.", 24).setOrigin(0.5);
        this.add.bitmapText(this.scale.width / 2, this.scale.height / 2 - 30, 'blackcoffee', "Press space to start", 24).setOrigin(0.5);

        // scene start
        this.input.keyboard.on('keydown-SPACE', () => {
            this.sound.play('click');
            this.scene.start('CarScene');
        });
    }
}