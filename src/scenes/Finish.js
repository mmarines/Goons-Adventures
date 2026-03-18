class Finish extends Phaser.Scene {
    constructor() {
        super("FinishScene");
    }
    
    create() {
        // Fade into scene
        this.cameras.main.fadeIn(700, 0, 0, 0);

        // Add looping hasbulla background
        this.backgroundVideo = this.add.video(this.scale.width / 2, this.scale.height / 2, 'hasbullaLaughing');
        this.backgroundVideo.setDisplaySize(this.scale.width, this.scale.height);
        this.backgroundVideo.setLoop(true);
        this.backgroundVideo.play(true);
        this.backgroundVideo.setDepth(-1);

        // Play looping hasbulla laugh
        this.laugh = this.sound.add('hasbullaLaugh', { loop: true, volume: 0 });
        if (!this.laugh.isPlaying) {
            this.laugh.play();
        }
        this.tweens.add({
            targets: this.laugh,
            volume: 0.5,
            duration: 700,
            ease: 'Sine.easeOut'
        });

        // Finishing text
        this.add.bitmapText(this.scale.width / 2, 40, 'blackcoffee', "Love You Bro", 48).setOrigin(0.5);

        // Credits
        this.add.bitmapText(this.scale.width / 2, 440, 'blackcoffee', "Credits:", 24).setOrigin(0.5);
        this.add.bitmapText(this.scale.width / 2, 460, 'blackcoffee', "From Max Marinescu", 20).setOrigin(0.5);
        this.add.bitmapText(this.scale.width / 2, 480, 'blackcoffee', "Click SFX: freesoundeffects - https://pixabay.com/sound-effects/film-special-effects-button-click-289742/", 20).setOrigin(0.5);
        this.add.bitmapText(this.scale.width / 2, 500, 'blackcoffee', "BGM: https://pixabay.com/music/beats-save-you-rap-instrumental-361444/", 20).setOrigin(0.5);
        this.add.bitmapText(this.scale.width / 2, 520, 'blackcoffee', "Hasbulla Laugh: https://www.101soundboards.com/sounds/3785242-laugh-05", 20).setOrigin(0.5);
        this.add.bitmapText(this.scale.width / 2, 540, 'blackcoffee', "Bitmap Text: Black Coffee: https://www.dafont.com/black-coffee.font", 20).setOrigin(0.5);
        this.add.bitmapText(this.scale.width / 2, 560, 'blackcoffee', "Los BGM: NanaSlayer009: https://tuna.voicemod.net/sound/1dedb2e9-4e9a-420b-8352-c8ab2cd7d54f", 20).setOrigin(0.5);
        this.add.bitmapText(this.scale.width / 2, 580, 'blackcoffee', "All images sourced from Google", 20).setOrigin(0.5);

        // Restart handler
        this.add.bitmapText(this.scale.width / 2, 115, 'blackcoffee', "Press R to Restart", 24).setOrigin(0.5);
        this.restartHandler = () => {
            this.sound.play('click');
                this.sound.stopByKey('hasbullaLaugh');
            this.scene.start('TitleScene');
        };
        this.input.keyboard.on('keydown-R', this.restartHandler);

        this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
            this.input.keyboard.off('keydown-R', this.restartHandler);
                this.sound.stopByKey('hasbullaLaugh');
            if (this.backgroundVideo) {
                this.backgroundVideo.stop();
                this.backgroundVideo.destroy();
            }
            if (this.finishLaugh) {
                this.finishLaugh.stop();
                this.finishLaugh.destroy();
            }
        });
    }
}