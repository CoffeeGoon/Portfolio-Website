

//beacon instance constructor
function Beac(){
	this.x;
	this.y;
	this.update = 0;
	this.quadrant = 4;
	this.accelx = 0.0;
	this.accely = 0.0;
	this.change = false;
	this.framenum;
	this.touched = false;
	this.attraction = false;
	this.getFrame = function(time){
      
      if( this.touched ){
        this.framenum = 6 + (time % 3);
      }

      else if(!this.touched ){  
         this.framenum = ( time % 24 )/4;
      }

      return framenum;
	};


//figures out if player has clicked a beacon
   this.checkLoc = function(pointx, xoffset, pointy, yoffset){
    var xdifference = this.x + xoffset + 10;
    var ydifference = this.y + yoffset + 10;
    if(this.change){
  this.update++;
  if(this.update >= 1){
  this.update = 0;
  this.change = false;
  }
}
    if(pointx < 50 + xdifference && pointx > - 50 + xdifference && this.update == 0){
   if(pointy < 50 + ydifference && pointy > ydifference - 50){
     this.touched = !this.touched;
     console.log("good");
     this.change = true;
    }
   }



};

//when beacon is active it changes the neutrons velocity
this.calculatePolarity = function(xshift, yshift, centerX, centerY, xsign, ysign){
	if(this.touched){
     var distx =  (xsign*( xshift + this.x   ) + 30 );
     var disty = (ysign*( yshift + this.y    ) - 15 );
     var maxaccel = 9;
     var angle = 90;
     if(distx != 0){
          angle = Math.atan(disty/distx);
       }
       var totaldist = Math.sqrt((distx*distx) + (disty*disty));
       var accel = maxaccel/(totaldist/40);
       //console.log("acceler " + accel + " angle " + angle)
        this.accely = (accel * Math.sin(angle));
            this.accelx = (accel * Math.cos(angle));
            if(this.accelx < 0 && distx < -25){
                this.accelx = -this.accelx;
            }
            if(this.accelx > 0 && distx > 25){
                this.accelx = - this.accelx;
            }
           
            if(this.accely > 0 && disty > 10){
                this.accely = -this.accely;
            }

            if(this.accely < 0 && disty < -10){
                this.accely = - this.accely;
            }

}else{ this.accelx = 0; this.accely = 0; }
}

this.getAX = function(){ return this.accelx; };
this.getAY = function(){ return this.accely;};
}



