class Box
  {
    constructor(posx, posy, lar, alt, velX) {
      this.posx = posx;
      this.posy = posy;
      this.lar = lar;
      this.alt = alt;
      this.velX = velX;
    }
    
    mostrar(){
      rect(this.posx, this.posy, this.lar, this.alt);
    }

    mover(){
      this.posx = this.posx + this.velX;
    }


  }

  
