



function gameToke(){
   this.x;
   this.y;
   this.collected = false;
   this.collect = function( midx,  midy,  startX,  StartY){
   if( !this.collected && startX + this.x < midx + 60 &&  startX + this.x > midx - 60 && StartY + this.y < midy + 20 && StartY + this.y > midy - 20){
      this.collected = true;
      return true;
   }
   return false;
   }

};

 function bm( base){
  var dress = "WormHole/";
  dress = dress.concat(base);
  var temp = new createjs.Bitmap(dress);
  return temp;
 };



function newWH(awayx,  awayy){
	var samplex = Math.floor(Math.random() * 2700) + 2000;
	var sampley = Math.floor(Math.random() * 2700) + 2000;
	var magX = Math.abs(samplex - awayx);
	var magY = Math.abs(sampley - awayy);
	var distance = Math.floor(Math.sqrt((magX * magX) +(magY*magY)));
    if(distance < 3500){
    if(magX < magY){
    while(distance < 3500){
     if(samplex <= awayx){
        samplex--;
     }
     else{
     samplex++;
     }
     if(samplex > 4000){
        break;
     }
     if(samplex < 10){
        break;
     }
     magX = Math.abs(samplex - awayx);
    var distance = Math.floor(Math.sqrt((magX * magX) +(magY*magY)));

    }


    }else{
      while(distance < 3500){
         if(sampley <= awayy){
         sampley--;
         }
         else{
            sampley++;
         }
         if(sampley > 4000){
         break;
         }
         if(sampley < 10){
         break;
         }
           magY = Math.abs(sampley - awayy);
    var distance = Math.floor(Math.sqrt((magX * magX) +(magY*magY)));

      }



    }
    }
//var WH = WormHole;
 this.gx = samplex;
	this.gy = sampley;
  var fdata = {
      images:["WormHole/goal1.png","WormHole/goal2.png" , "WormHole/goal3.png", "WormHole/goal4.png"],
    frames:{ width: 2000, height: 200, count: 4, regX: 0, regY: 0, spacing: 0, margin: 0}
  };
    var sheet = new createjs.SpriteSheet(fdata);
  this.WHsprite = new createjs.Sprite(sheet);

};

function StarMap(aspr) {
this.dimensionX = 900;
this.dimensionY = 900;
this.startX = 0;
this.startY = 0;
this.xinit;
this.yinit;
this.Asteroids;
this.velocity = [0,0];

this.shift = function( dx,  dy){

  this.startX += dx;
  this.startY += dy;
 // goalie.update(dx, dy);
  //goal.update(dx, dy);
};

this.accelerate= function( accelx, accely){
  this.velocity[0] = this.velocity[0] + accelx;
  this.velocity[1] = this.velocity[1] + accely;
  if(Math.abs(this.velocity[0]) > 11 ){
     if(this.velocity[0] > 0){
     this.velocity[0] = 11;
     }
     else{
     this.velocity[0] = -11;
     }
  }
  if(Math.abs(this.velocity[1]) > 11){
     if(this.velocity[1] > 0 ){
     this.velocity[1] = 11;
     }
     else{
     this.velocity[1] = -11;
     }

  }
  this.shift(this.velocity[0], this.velocity[1]);
};

this.dwarf = new Neutron();
this.startX = - this.dwarf.x;
this.startY = - this.dwarf.y;
this.xinit = this.startX;
this.yinit = this.startY;
this.goal = new newWH(this.dwarf.x, this.dwarf.y);
this.swap = new Array(
    bm("startile6.png"),
    bm("startile7.png"),
    bm("startile6.png"),
    bm("startile6.png"),
    bm("startile7.png"),
    bm("startile6.png"),
    bm("startile7.png")
    );
this.tokens = new Array();
  this.tokenz = new Array();
for(i = 0; i < 90; i++){
    var temp =  new gameToke();
    temp.x = Math.floor(Math.random() * 60) + 1;
    temp.y = Math.floor(Math.random() * 60) + 1;
    temp.x = temp.x + i* (Math.floor(Math.random() * 18) + 22);
    temp.y =  temp.y + i* (Math.floor(Math.random() * 18) + 22);
   var bt = bm("token.png");
   bt.x = temp.x;
   bt.y = temp.y;
   this.tokenz.push(temp);
    this.tokens.push(bt);
}

this.tiles = new Array();

for(i = 0; i < 500; i++){
     var tempy = new Array();
    for( j = 0; j < 500; j++){
      var value = Math.floor(Math.random() * 7);
     tempy.push( (this.swap[value].clone()) );
    }
    this.tiles.push(tempy);
}

 this.velocityCH = function( vx,  vy){
	this.velocity[0] = vx;
	this.velocity[1] = vy;
};
this.warp = function( awayx,  awayy){
   var samplex = Math.floor(Math.random() * 2700) + 2000;
    var sampley = Math.floor(Math.random() * 2700) + 2000;
    var magX = Math.abs(samplex - awayx);
    var magY = Math.abs(sampley - awayy);
    var distance = Math.floor(Math.sqrt((magX * magX) +(magY*magY)));
    if(distance < 3500){
    if(magX < magY){
    while(distance < 3500){
     if(samplex <= awayx){
        samplex--;
     }
     else{
     samplex++;
     }
     if(samplex > 4000){
        break;
     }
     if(sampleX < 10){
        break;
     }
     magX = Math.abs(samplex - awayx);
    var distance = Math.floor(Math.sqrt((magX * magX) +(magY*magY)));

    }


    }else{
      while(distance < 3500){
         if(sampley <= awayy){
         sampley--;
         }
         else{
            sampley++;
         }
         if(sampley > 4000){
         break;
         }
         if(sampley < 10){
         break;
         }
           magY = Math.abs(sampley - awayy);
    var distance = Math.floor(Math.sqrt((magX * magX) +(magY*magY)));

      }
    }
    }
this.goal.gx = samplex;
this.goal.gy = sampley;
};

this.update = function(){
    this.framenum = this.framenum + 1;
    if(this.framenum > 23){
        this.framenum = 0;
    } 
};


this.astr = new Array();
 for(i = 0; i < 150; i++){
    var temp = new asteroid(aspr);
    temp.X += Math.floor(Math.random() * 50) + 40 + i*(Math.floor(Math.random()*20) + 60 );
   temp.Y += Math.floor(Math.random() * 50) + 40 + i*(Math.floor(Math.random()*20) + 60 );
   if(temp.X + this.startX > 50 && temp.X + this.startX < 900){
    temp.X += 1000;
   }
   temp.sa.x = temp.X;
   temp.sa.y = temp.Y;
   this.astr.push(temp);
}


this.restart = function(){
//dwarf.hp = 20;
for(i = 0; i < 150; i++){
    var temp = this.astr[i];
    temp.X = Math.floor(Math.random() * 120);
     temp.Y = Math.floor(Math.random() * 120);
    temp.VelocityX = Math.floor(Math.random() * 4);
    var sign = Math.floor(Math.random() * 2);
    if(sign ==  1){
        temp.VelocityX = - temp.VelocityX;     
    }
     sign = Math.floor(Math.random() * 2);
    temp.VelocityY = Math.floor(Math.random() * 4);
    if(sign == 1){  temp.VelocityY = - temp.VelocityY;}
    temp.X = Math.floor(Math.random() * 70) + i*(Math.floor(Math.random() * 20) + 60);
    temp.Y =  Math.floor(Math.random() * 70) + i*(Math.floor(Math.random() * 20) + 60);
    if(temp.X + this.startX > 50 && temp.X + this.startX < 900){
        temp.X += 1000;
    }
}

for(i = 0; i < 90; i++){
    var temp = new gameToke();
    temp.x = Math.floor(Math.random() * 60) + 1;
    temp.y = Math.floor(Math.random() * 60) + 1;
    temp.x = temp.x + i* (Math.floor(Math.random() * 18) + 22);
    temp.y =  temp.y + i* (Math.floor(Math.random() * 18) + 22);
     var bt = bm("token.png");
   bt.x = temp.x;
   bt.y = temp.y;
   this.tokenz[i] = temp;
    this.tokens[i] = bt;
}
for(i = 0; i < 500; i++){
    for( j = 0; j < 500; j++){
      var value = Math.floor(Math.random() * 7);
     this.tiles[i][j] = (this.swap[value].clone());

    }
}
this.dwarf = new Neutron();
this.startX = -this.dwarf.x;
this.startY = -this.dwarf.y;
this.xinit = this.startX;
this.yinit = this.startY;
this.warp(this.dwarf.x, this.dwarf.y);

};

this.reset = function(){
  this.dwarf.hp = 20;
  this.velocity[0] = 0;
  this.velocity[1] = 0;
  this.startX = this.xinit;
  this.startY = this.yinit;
  this.dwarf.fuel = 250;

};



this.astrUpdate = function(){
  for(i = 0; i < 30; i++){
    this.astr[i].update(this.startX, this.startY);
  }
};




this.getastr = function(){ return astr; };
 this.getTiles = function(){ return this.tiles;};
 this.getWormHole = function(){ return (this.goal.frames[goal.framenum/6]);}; 
this.getNeutron = function(){
 
 return dwarf.getImage();

 };





};





