class AccueilScene extends Phaser.Scene {
    constructor() {
        super({ key:"Accueil"});
      }
  
      preload() {
        this.load.image('Commencer', 'Assets/Commencer');
        
      }
    
      create() {
        const width = this.scale.width; // Utilisation de la largeur de la scène
        const height = this.scale.height; // Utilisation de la hauteur de la scène
        this.img = this.add.image(width / 2, height / 2, 'foret');
        
        // Échelle de l'image
        const scalex = width / this.img.width;
        const scaleY = height / this.img.height;
        const scale = Math.max(scalex, scaleY);
        this.img.setScale(scale);
    
        this.cameras.main.setBackgroundColor('#24252A');
      }
    
      update() {
      }
    }