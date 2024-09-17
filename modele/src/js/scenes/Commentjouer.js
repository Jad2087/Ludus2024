class CmtJouer extends Phaser.Scene {
    constructor() {
        super({ key: "CommentJouer" });
    }
  
    preload() {
        // Chargement des images
        this.load.image('foret', 'Assets/foret_fond.jpg');
        this.load.image('btnRetour', 'Assets/Retour.png');
       
    }
  
    create() {
        // Fond image
        const width = this.scale.width;
        const height = this.scale.height;
        this.img = this.add.image(width / 2, height / 2, 'foret');
  
        // Bouton Quitter
        const retourBtn = this.add.image(700, 500, "btnRetour").setInteractive().setScale(0.5);
        retourBtn.on("pointerdown", () => this.scene.start("Accueil"));
  
      
    }
  
    update() {
    }
  }
  