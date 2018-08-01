
function Neutron(){
this.x;
this.width;
this.height;
this.y;
this.hp = 20;
this.damaged = false;
this.height;
this.fuel = 250;
this.boost = false;
this.count;
this.count = 0;
  this.x = Math.floor(Math.random() * 2000) + 1700;
  this.y = Math.floor(Math.random() * 2000) + 1700;
    this.width = 25;
    this.height = 25;

this.getX = function(){ return(this.x + this.width/2);};

this.getY = function(){ return (this.y + ( this.height/2));};

this.engage = function(){ this.boost = ! this.boost;};

this.warp = function( dx, dy){
	this.x = dx;
	this.y = dy;
}

this.checkup = function(){
     this.count++;
   if(this.damaged){
     if(this.count % 2 == 0){
       this.hp -= 1;
     }
   }
}

this.getImage = function(){
	this.count++;
	if(!this.damaged){
     var value = (this.count % 24)/2;
     if (this.count == 240){
      this.count = 0;
     }
     return value;

	}

	else{
      var value = (this.count % 10)/2;
      if (this.count == 240){
      this.count = 0;
      }
      if(this.count % 2 == 0){
      this.hp--;
      }
      return value;
	}
};

};
