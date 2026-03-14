/*
    Max Marinescu
    Goons Adventures
    Time spent: 7 hours

    Phaser Components Used:
    Text Objects
    Graphics Objects

    Citations:
    Button Click SFX: freesoundeffects - https://pixabay.com/sound-effects/film-special-effects-button-click-289742/
    Car BG Music: DeltaX-Music - https://pixabay.com/music/beats-save-you-rap-instrumental-361444/
*/

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: true
    },
    scene: [ Title, Car, TOTW]
}

let game = new Phaser.Game(config);

