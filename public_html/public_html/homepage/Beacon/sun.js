

function newSun( shiftx,  shifty){
	this.xpos = Math.floor(Math.random() * 300) + 200;
    this.ypos = Math.floor(Math.random() * 300) + 200;
    this.bit = new createjs.Bitmap("WormHole/sun.png");
    this.bit.x = this.xpos;
    this.bit.y = this.ypos;
    this.inradius = function( shiftx, shifty,  centerx,  centery){
       return (Math.abs(shiftx + this.xpos + 100 - centerx) < 150 && Math.abs(shifty + this.ypos + 100 - centery) < 150);
    };   
    }
     