/*
    Max Marinescu
    Goons Adventures
    Time spent: ~28 hours

    Phaser Components Used:
    Text Objects
    Graphics Objects
    Cameras
    Particles
    Tweens


    Citations:
        Audio:
        Button Click SFX: freesoundeffects - https://pixabay.com/sound-effects/film-special-effects-button-click-289742/
        Car BG Music: DeltaX-Music - https://pixabay.com/music/beats-save-you-rap-instrumental-361444/
        Hasbulla Laugh SFX: https://www.101soundboards.com/sounds/3785242-laugh-05
        Los BGM: NanaSlayer009 - https://tuna.voicemod.net/sound/1dedb2e9-4e9a-420b-8352-c8ab2cd7d54f

        Bitmap Font:
        Black Coffee: https://www.dafont.com/black-coffee.font

        Images: Google


*/

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: true
    },
    scene: [ Title, Car, TOTW, Finish]
}

let game = new Phaser.Game(config);

