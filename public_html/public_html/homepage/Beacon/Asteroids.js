


function asteroid(asp){
	this.X = Math.floor(Math.random() * 120);
	this.Y = Math.floor(Math.random() * 120);
	var r = Math.floor(Math.random() * 2);
    this.VelocityX = Math.floor(Math.random() * 4) + 1;
     this.VelocityY = Math.floor(Math.random() * 4) + 1;
     this.typ = 0;
     this.framenum = 0;
     this.sa = asp.clone();
     this.sa.x = this.X;
     this.sa.y = this.Y;
     var sign =  Math.floor(Math.random() * 2);
     if(sign == 1){
      this.VelocityX = - this.VelocityX;
     }
     if(r == 1){
     this.VelocityY = - this.VelocityY;
     }
     this.update =  function( Xshift,  Yshift){
     this.X += this.VelocityX;
     this.Y += this.VelocityY;
     if(this.X > 5000 + Xshift){
     this.X = 0;
     }
     if(this.Y > 5000 + Yshift){
      this.Y = 0;
     }
     if(this.Y < -80 + Yshift){
       this.Y = 5000;
     }
     if(this.X < -30 + Xshift){
      this.X = 5000;
     }
     this.sa.x = this.X;
     this.sa.y = this.Y;
     this.typ++;
     framenum = (this.typ % 12)/2;

    };
}
