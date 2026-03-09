/*
    Max Marinescu
    Goons Adventures
    Time spent: 7 hours

    Phaser Components Used:

    Citations:
    Button Click SFX: freesoundeffects - https://pixabay.com/sound-effects/film-special-effects-button-click-289742/
    
*/

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade'
    },
    scene: [ Title, Car, TOTW]
}

let game = new Phaser.Game(config);

