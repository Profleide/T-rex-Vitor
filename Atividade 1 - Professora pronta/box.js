class Box
  {
    constructor(x,y,w,h,vx) // função construção posiçao X, posição Y, altura e comprimento (especificações)
    {
      this.x =x; // posição X
      this.y =y; // Posição Y
      this.w =w; // Comprimento
      this.h = h; // altura 
      this.vx = vx; // Velocidade 
      //this.vy = vy; // Velocidade 
    }
    
    show() // mostrar 
    {
      rect(this.x,this.y,this.w,this.h)
    }
    
      move() // mover 
    {
      this.x = this.x+this.vx;
    }
    moveup
  
  }

  
