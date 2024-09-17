const config = {
    type: Phaser.AUTO,
    parent: "canvas-wrapper",
    transparent: true,
    width: 1620,
    height: 980,
    scene: [Accueil, Jeu, Credit, CmtJouer, PartieTerminee, Victoire ]
    
};

const game = new Phaser.Game(config);