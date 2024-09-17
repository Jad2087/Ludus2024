class Jeu extends Phaser.Scene {
    constructor() {
        super({ key: "Jeu" });
    }
  
    preload() {
        // Chargement des images
        this.load.image('foret', 'Assets/foret_fond.jpg');
        this.load.image('btnQuitter', 'Assets/Quitter.png');
       
    }
  
    create() {
        // Fond image
        const width = this.scale.width;
        const height = this.scale.height;
        this.img = this.add.image(width / 2, height / 2, 'foret');
  
        // Bouton Quitter
        const quitterBtn = this.add.image(700, 500, "btnQuitter").setInteractive().setScale(0.5);
        quitterBtn.on("pointerdown", () => this.scene.start("Jeu"));
  
      
    }
  
    update() {
    }
  }
  