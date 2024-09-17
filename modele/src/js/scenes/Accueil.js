class Accueil extends Phaser.Scene {
  constructor() {
      super({ key: "Accueil" });
  }

  preload() {
      // Chargement des images
      this.load.image('foret', 'Assets/foret_fond.jpg');
      this.load.image('logo', 'Assets/logo.png');
      this.load.image('btnCommencer', 'Assets/Commencer.png');
      this.load.image('btnCredits', 'Assets/Crédit.png');
      this.load.image('btnComment', 'Assets/Cmtjouer.png');
      this.load.image('btnAudio', 'Assets/audio.png');
      this.load.image('btnAudioOff', 'Assets/audiooff.png');
  }

  create() {
      // Fond image
      const width = this.scale.width;
      const height = this.scale.height;
      this.img = this.add.image(width / 2, height / 2, 'foret');
      this.img = this.add.image(width / 5, height / 6, 'logo');

      // Bouton Commencer
      const commencerBtn = this.add.image(700, 500, "btnCommencer").setInteractive().setScale(0.5);
      commencerBtn.on("pointerdown", () => this.scene.start("PartieTerminée"));
      commencerBtn.on("pointerdown", () => this.scene.start("Victoire"));
    

      // Bouton Crédits
      const creditBtn = this.add.image(625, 800, "btnCredits").setInteractive().setScale(0.5);
      creditBtn.on("pointerdown", () => this.scene.start("Crédit"));

      // Bouton Comment jouer
      const commentBtn = this.add.image(700, 700, "btnComment").setInteractive().setScale(0.5);
      commentBtn.on("pointerdown", () => this.scene.start("CommentJouer"));

      
      // Bouton Audio
      this.add.image(775, 200, "btnAudio").setInteractive().setScale(1);

     // Bouton Audio
        this.add.image(775, 100, "btnAudioOff").setInteractive().setScale(1);

      
      

      // Ajuster l'échelle de l'image de fond
      const scalex = width / this.img.width;
      const scaleY = height / this.img.height;
      const scale = Math.max(scalex, scaleY);
      this.img.setScale(scale);

      // Définir la couleur de fond de la caméra
      this.cameras.main.setBackgroundColor('#24252A');
  }

  update() {
  }
}
