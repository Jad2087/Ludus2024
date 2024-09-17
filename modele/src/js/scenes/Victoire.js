class Victoire extends Phaser.Scene {
    constructor() {
        super({ key: "" });
    }
  
    preload() {
        // Chargement des images
        this.load.image('foret', 'Assets/foret_fond.jpg');
        this.load.image('btnPartiTerminee', 'Assets/PartieTerminer.png');
        this.load.image('btnRetour', 'Assets/Retour.png');
        this.load.image('btnVictoire', 'Assets/Victoire.png');
       
    }
  
    create() {
        // Fond image
        const width = this.scale.width;
        const height = this.scale.height;
        this.img = this.add.image(width / 2, height / 2, 'foret');
  
        // Bouton Quitter
        const Btnrecommencer = this.add.image(600, 300, "btnPartieTerminee").setInteractive().setScale(0.5);
        Btnrecommencer.on("pointerdown", () => this.scene.start("Accueil"));
  
        const retourBtn = this.add.image(700, 500, "btnRetour").setInteractive().setScale(0.5);
        retourBtn.on("pointerdown", () => this.scene.start("Accueil"));

        const BtnVictoire = this.add.image(500, 300, "btnVictoire").setInteractive().setScale(0.5);
        BtnVictoire.on("pointerdown", () => this.scene.start("Accueil"))
    }
  
    update() {
    }
  }
  