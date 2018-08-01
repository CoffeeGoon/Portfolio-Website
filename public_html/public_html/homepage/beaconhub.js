var map;
var blah;
//start score
var score = 0;
var beacons;

//flag for game reset
var supernova = false;
var duble = 0;
//animation timer for explosion
var enddelay = 0;
var gameOver = false;
var alter = 0;
var tokIm;
var astrwait = 100;
var planet;
var coords;
var suns;
var planets;
var width;
var height;
var scorey;
var round;
var sunBt;
var cover;
var Bsprite;
var location;
var begin = true;
var stage;
var astr;
var dx;
var dy;
var active;
var portal;
var loc;
var pulse;

//function for Bitmap generation
 function bm(base){
 	var dress = "Beacon/WormHole/";
 	dress = dress.concat(base);
 	var temp = new createjs.Bitmap(dress);
 	return temp;
 }

 function im(base){
    var img = new Image();
    img.src= base;
    return img;
 }

 //Beacon/wormhole img addresses
 var pframes = new Array(
    im("Beacon/WormHole/goal1.png")
     im("Beacon/WormHole/goal2.png"),
      im("Beacon/WormHole/goal3.png"),
       im("Beacon/WormHole/goal4.png")
  );

 //central particle img addresses
 var NeutImg = new Array(
           im("Beacon/WormHole/neutron1.png"),
           im("Beacon/WormHole/neutron2.png"),
           im("Beacon/WormHole/neutron1b.png"),
           im("Beacon/WormHole/neutron3.png"),
           im("Beacon/WormHole/neutron4.png"),
           im("Beacon/WormHole/neutron2b.png"),
           im("Beacon/WormHole/neutron5.png"),
           im("Beacon/WormHole/neutron3b.png"),
           im("Beacon/WormHole/neutron6.png")
          );

 //asteroid img addresses
 var astrframes = new Array(
          im("Beacon/WormHole/asteroid1.png"),
          im("Beacon/WormHole/asteroid2.png"),
          im("Beacon/WormHole/asteroid3.png"),
          im("Beacon/WormHole/asteroid4.png"),
          im("Beacon/WormHole/asteroid6.png"),
          im("Beacon/WormHole/asteroid5.png")
          );

//supernova img addresses
 var splosion =  new Array(
      im("Beacon/WormHole/boom.png"),
      im("Beacon/WormHole/boom2.png"),
      im("Beacon/WormHole/boom3.png"),
      im("Beacon/WormHole/boom4.png"),
      im("Beacon/WormHole/boom5.png"),
      im("Beacon/WormHole/boom6.png"),
      im("Beacon/WormHole/boom7.png")
      );
  
  //beacon img addresses
 var Beframes = new Array(
           im("Beacon/WormHole/beacon1.png"),
           im("Beacon/WormHole/beacon2.png"),
           im("Beacon/WormHole/beacon3.png"),
           im("Beacon/WormHole/beacon4.png"),
           im("Beacon/WormHole/beacon5.png"),
           im("Beacon/WormHole/beacon6.png")
          );

 //activated beacon imgs
 var Beeframes = new Array(
              im("Beacon/WormHole/beacon7.png"),
               im("Beacon/WormHole/beacon8.png"),
                im("Beacon/WormHole/beacon9.png")
                );


//central particle when boosted 
 var hurtframes = new Array(
           im("Beacon/WormHole/neutron5c.png"),
           im("Beacon/WormHole/neutron4c.png"),
           im("Beacon/WormHole/neutron3c.png"),
           im("Beacon/WormHole/neutron2c.png"),
           im("Beacon/WormHole/neutron1c.png")
          );

 //returns animation sprite based on address argument
 function sprit(base){
  var framray = new Array();
  for(i = 0; i < base.length; i++){
      var temp = [0,0, base[i].width, base[i].height, i];
      framray.push(temp);
  }
  var data = {
    images: base,
    frames: framray,
    animations:{
    run: [0, base.length - 1, "run", 1.5]
  }

  };
  var sheet = new createjs.SpriteSheet(data);
  var animation = new createjs.Sprite(sheet);
  return animation;
 }


//generates all beacons that are displayed on the map
 function genBeacons(){

  beacons = new Array();

  var targetX = map.goal.gx + map.startX;

  var targetY = map.goal.gy + map.startY;

  var slope = ( targetY / targetX);

  var inverse =  - ( targetX/targetY);

  var dist = Math.sqrt((targetX)*targetX + (targetY)*(targetY));

  var incr = dist/10;

  var startX1 = targetX;

  var startY1 = targetY;

  var changeX = 0.0;

  var changeY = 0.0;

  var up = true;

  for(i = 0; i < 16; i++){
    changeX = Math.sqrt((incr*incr)/((slope*slope) + 1));
    changeY  = changeX*slope;
    if(up){
    var mag = Math.floor(Math.random() * 70 ) + 5;
    changeX += mag * (inverse);
    changeY += mag;
  }
  else{

    var mag = -1 * ( Math.floor(Math.random() * 70 ) + 5);
    changeX += mag * (inverse);
    changeY += mag;

  }

  up = !up;
var quadrant = 4;
 startX1 -= changeX;
 startY1 -= changeY;
if(targetX + map.startX < 0){
      quadrant = 3;
      startX1*= -1;
    if(targetY + map.startY < 0){
      quadrant = 2;
      startY1*= -1;
    }
  }
    else if(targetY + map.yshift < 0 ){
            startY1 *= - 1;
              quadrant = 1;
        }
var temp = new Beac();
temp.x = Math.floor(startX1);
temp.y = Math.floor(startY1);
temp.quadrant = quadrant;
temp.sp = Bsprite.clone();
temp.sp.x = temp.x;
temp.sp.y = temp.y;
beacons.push(temp);
}

var magnitude = 15;
var initialx = 2200;
var intialy = 2200;
var count = 1;
var prev1 = 2;
var prev2 = 1;
var initangle = 2 * Math.PI;
for(i = 16; i < 50; i++){
magnitude = prev1 + prev2;
           count--;
          // var loon = Math.floor(Math.random() * 25);
          // var sign = Math.floor(Math.random() * 2);
           if(sign == 0){
               loon = -loon;
           }
           var spreadx =  Math.floor((  5*Math.cos(initangle) * (magnitude) ) +  (190 * Math.cos(initangle)) );
            sign = Math.floor(Math.random() * 2); 
           //loon = Math.floor(Math.random() * 30);
           //if(sign == 0){
             //  loon = - loon;
          // }
           var spready = Math.floor((  5*Math.sin(initangle) * (magnitude) ) + (190 * Math.sin(initangle))); // + loon + (200 * sign);
           var temp =  new Beac();
           temp.x = spreadx;
           temp.y = spready;
           temp.sp = Bsprite.clone();
           temp.sp.x = temp.x;
           temp.sp.y = temp.y;
           beacons.push(temp);
           initangle += Math.PI/6.7;
           if(count < 0){
               count = 1;
               if(magnitude > 200){
                   count = 4;
               }
               if(magnitude > 800){
                   count = 5;
               }
               if(magnitude > 1000){
                   count = 7;
               }
               prev2 = prev1;
               prev1 = magnitude;
           }
}

         var closeto = new Beac();
         closeto.x =  -map.startX  - 200;
         closeto.y = - map.startY -  200;
         closeto.sp = Bsprite.clone();
         closeto.sp.x = closeto.x;
         closeto.sp.y = closeto.y;
         beacons.push(closeto);

         initialx = 2200;
         initialy = 2200;
         count = 1;
         prev1 = 5;
         prev2 = 3;

        for( i = 51; i < 80; i++){
           magnitude = prev1 + prev2;
           count--;
           var loon = Math.floor(Math.random() * 30);
           var sign = Math.floor(Math.random() * 2);
            if(sign == 0){
                loon = - loon;
            }
            var spreadx = Math.floor(  (6*Math.cos(initangle) * (magnitude) ) +  (300 * Math.cos(initangle)) );
            sign = Math.floor(Math.random() * 2);
            loon = Math.floor(Math.random() * 30);
            if(sign == 0){
                loon = - loon;
            }

            var spready = Math.floor( ( 6*Math.sin(initangle) * (magnitude) ) + (300 * Math.sin(initangle))); // + loon + (200 * sign);
            var temp = new Beac();
            temp.x = spreadx + initialx;
            temp.y = spready + initialy;
            temp.sp = Bsprite.clone();
            temp.sp.x = temp.x;
            temp.sp.y = temp.y;
            beacons.push(temp);
            initangle += Math.PI/6;
            if(count < 0){
                count = 1;
                if(magnitude > 200){
                    count = 4;
                }
                if(magnitude > 800){
                    count = 6;
                }
                if(magnitude > 1000){
                    count = 8;
                }
                prev2 = prev1;
                prev1 = magnitude;
            }
        }
        initialx = map.goal.gx;
        initialy = map.goal.gy;
        count = 1;
        prev1 = 5;
        prev2 = 3;

        for( i = 80; i <  99; i++){
            magnitude = prev1 + prev2;
            count--;
            var loon = Math.floor(Math.random() * 30);
            var sign = Math.floor(Math.random() * 2);
            if(sign == 0){
                loon = - loon;
            }
            var spreadx = Math.floor( ( 10*Math.cos(initangle) * (magnitude) ) +  (800 * Math.cos(initangle))) ;
            sign = Math.floor(Math.random() * 2);
            loon = Math.floor(Math.random() * 30);
            if(sign == 0){
                loon = - loon;
            }
            var spready = Math.floor(  (10*Math.sin(initangle) * (magnitude) ) + ((800 * Math.sin(initangle))) ); // + loon + (200 * sign);
            var temp = new Beac();
            temp.x = spreadx + initialx;
            temp.y = spready + initialy;
            temp.sp = Bsprite.clone();
            temp.sp.x = temp.x;
            temp.sp.y = temp.y;
            beacons.push(temp);
            initangle += Math.PI/6;
            if(count < 0){
                count = 1;
                if(magnitude > 200){
                    count = 3;
                }
                if(magnitude > 800){
                    count = 5;
                }
                if(magnitude > 1000){
                    count = 6;
                }
                prev2 = prev1;
                prev1 = magnitude;
            }

        }
           var mag = 350;
           var tang = Math.PI/5;
           var bang = Math.PI/3;

        for(k = 1; k <= 7; k++){
            var temp1 = new Beac();
            var temp2 = new Beac();
            var temp3 = new Beac();
            temp1.x = Math.floor((mag * k)*Math.cos(tang));
            temp2.x = k * mag;
            temp3.x = Math.floor((k * mag)*Math.cos(bang));
            temp1.sp = Bsprite.clone();
            temp1.sp.x = temp1.x;
            temp2.sp = Bsprite.clone();
            temp2.sp.x = temp2.x;
            temp3.sp = Bsprite.clone();
            temp3.sp.x = temp3.x;
            temp1.sp.y = temp1.y = Math.floor((k * mag) * Math.sin(tang));
            temp2.sp.y = temp2.sp.y = (k * mag);
            temp3.sp.y = temp2.sp.y = Math.floor((k* mag) *Math.sin(bang));
  beacons.push(temp1);
  beacons.push(temp2);
  beacons.push(temp3);
}

}
 
 var BoomSprite;
 var Asprite;
 var Hsprite;
 var Bsprite;
 var Nsprite;

function init(){
	 canvas = document.getElementById("beaconCanvas");
   width = canvas.width;
   height = canvas.height;
	stage = new createjs.Stage(canvas);
  begin = false
  round = bm("background.png");
           var adata = {
             images: astrframes,
             frames: [
                      [0,0,astrframes[0].width,astrframes[0].height,0],
                       [0,0,astrframes[1].width,astrframes[1].height, 1],
                        [0,0,astrframes[2].width,astrframes[2].height,2],
                         [0,0,astrframes[3].width, astrframes[3].height, 3],
                          [0,0,astrframes[4].width, astrframes[4].height,4],
                           [0,0,astrframes[5].width, astrframes[5].height,5] 
             ],
             animations:{
        run:[0, 5, "run"]
           }
           };
           
  var sheet = new createjs.SpriteSheet(adata);
  Asprite = new createjs.Sprite(sheet);
	map =  new StarMap(Asprite);
 portal = sprit(pframes);
  portal.x = map.goal.gx + map.startX;
  portal.y = map.goal.gy + map.startY;
	blah =  map.tiles;
  /*
  for(i = 0; i < 500; i++){
    for(j = 0; j < 500; j++){
      stage.addChild(blah[i][j]);
    }
  }
  */
    var cover1 =  new createjs.Bitmap("Beacon/WormHole/neutroncover.png");
    var cover2 = new createjs.Bitmap("Beacon/WormHole/neutroncover2.png");
    cover = new Array( cover1, cover2);
     
     var bdata = {
      images: splosion,
      frames: [
              [0 ,0, splosion[0].width, splosion[0].height, 0],
              [0 ,0, splosion[1].width, splosion[1].height, 1],
              [0 ,0, splosion[2].width, splosion[2].height, 2],
              [0 ,0, splosion[3].width, splosion[3].height, 3, 140],
              [0 ,0, splosion[4].width, splosion[4].height, 4, 140, 90],
              [0 ,0, splosion[5].width, splosion[5].height, 5, 130, 90],
              [0 ,0, splosion[6].width, splosion[6].height, 6, 220, 90]
      ],
      animations:{
        run:[0, 6, "run"]
      }
     };

      var sheet = new createjs.SpriteSheet(bdata);
      BoomSprite = new createjs.Sprite(sheet);
        Bsprite = sprit(Beframes);
        active = sprit(Beeframes);
        pulse = new Array();
        for(i = 0; i < 120; i++){
                pulse.push(active.clone());
        }
          Nsprite = sprit(NeutImg);
         Hsprite = sprit(hurtframes);
        planet = bm("planet.png");
       sunBt = bm("sun.png");
       message = "X: " + Math.floor(map.goal.gx + map.startX - width/2) + " Y: " + Math.floor(map.goal.gy + map.startY - height/2);
        loc= new createjs.Text(message,"20px Arial", "#0000FF");
        loc.x =  60;
         loc.y =  height - (height/8);
        loc.textBaseline = "alphabetic";
        stage.addChild(loc);
         amount = "SCORE: " + score;
         scorey = new createjs.Text(amount, "20px Arial", "#00FF00");
         scorey.x =  60;
         scorey.y = 80;
         scorey.textBaseline = "alphabetic";
        stage.addChild(scorey);
       genBeacons();
         dx = 0;
        dy = 0;
        coords = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        suns = new Array();
         planets = [
                planet.clone(),
                planet.clone(),
                planet.clone(),
                planet.clone(),
                planet.clone(),
                planet.clone(),
                planet.clone(),
                planet.clone(),
                planet.clone(),
                planet.clone()
         ];
         
        for(i = 0; i < 10; i++){
          var basex = Math.floor(Math.random() * 400) - 650 + (i * 800);
          var basey = Math.floor(Math.random() * 400) - 650 + (i * 800);
          coords[i] = basex + 400;
          coords[i*2] = basey + 400;
          planets[i].x = coords[i];
          planets[i].y = coords[i*2];
        var sunny = new  newSun( map.xshift , map.yshift );
          sunny.xpos = basex + 25*i;
          sunny.ypos = basey + 35*i;
          if(sunny.xpos + map.xshift > - 400 && sunny.xpos + map.xshift < width + 400){
	        sunny.xpos = sunny.xpos + 900;
          }
          if(sunny.ypos + map.yshift > -400 && sunny.ypos + map.yshift < height + 400){
	        sunny.ypos = sunny.ypos + 900;
          }
             suns.push(sunny);
             //stage.addChild(planets[i]);
            // stage.addChild(suns[i].bit);
          
        }

      //   for(i = 0; i < map.tokens.length; i++){
        //  stage.addChild(tokens[i].bit);
      //  }
        //for(i = 0; i < beacons.length; i++){
        //  stage.addChild(beacons[i].sp);
        //}
       // for(i = 0; i < map.astr.length; i++){
        //  stage.addChild(map.astr[i].sa);
      //  }

      

        Nsprite.x = width/2;
        Nsprite.y = height/2;
        planet.x = 120;
        planet.y = 120;
        BoomSprite.x = 100;
        BoomSprite.y = 100;
        Bsprite.x = 400;
        Bsprite.y = 400;
        Hsprite.x = 300;
        Hsprite.y = 150;
        Asprite.x = 90;
        Asprite.y = 360;
       stage.addChild(Nsprite);
        Nsprite.gotoAndPlay("run");

       // stage.addChild(planet);

        stage.addChild(BoomSprite);
        BoomSprite.gotoAndPlay("run");
        stage.addChild(Bsprite);
        Bsprite.gotoAndPlay("run");
        stage.addChild(Hsprite);
        stage.addChild(Asprite);
        Hsprite.gotoAndPlay("play");
        Asprite.gotoAndPlay("play");
        stage.addChild(portal);
        portal.gotoAndPlay("run");

   //createjs.Ticker.timingMode = createjs.Ticker.RAF;
  // createjs.Touch.enable(stage);



//Event responsible for user input

stage.on("stagemousedown", function(evt) {

//alert("the canvas was clicked at "+evt.stageX+","+evt.stageY);
/*
  var v1 = -10;
  var v2 = -10;
  if(evt.stageX < width/2 ){
    v1 = 10;
  }
  if(evt.stageY < height/2){
    v2 = 10;
  }
  map.velocity[0] = v1;
  map.velocity[1] = v2;
  */

 if(map.dwarf.boost){
    xdisplace =   width/2 - evt.stageX;
    ydisplace =  height/2 - evt.stageY;
    if(xdisplace == 0){
      xdisplace = .0001;
    }
    angle = Math.atan(Math.abs(ydisplace/xdisplace));
    
        map.velocity[0] = 10 * Math.cos(angle);
  
  if(xdisplace < 0){
map.velocity[0] *= -1;
  }

    map.velocity[1] = 10 * Math.sin(angle);
    if(ydisplace < 0){
      map.velocity[1] *= -1;
    }
  }
     if(!begin && duble < 2){ 
      begin = true;
      duble = 0;   
     }
     else if(!begin){ duble++}
  for(i = 0; i < 120; i++){
    var beaconCX = map.startX + width/2;
    var beaconCY = map.startY + height/2;
    beacons[i].checkLoc(evt.stageX, beaconCX, evt.stageY, beaconCY);
  }
   });

    createjs.Ticker.setFPS(8);
   createjs.Ticker.addEventListener("tick", tick);
   
	

//round.on("click",function(evt){})
  


}

function vicinity(cornerx, cornery){
if(cornerx > -500 && cornerx < width  && cornery > -500 && cornery < height){
  return true;
}
return false;

}

//function press(){

//}

function tick(){
     
   if(begin){
    var off = false;

    //determines map bounds
    if(map.startX + 8000 < width){
       off = true;
    }
    
    if(map.startX > 100){
      off = true;
    }

    if(map.startY + 8000 < height){
      off = true;
    }

    if(map.startY > 100){
      off = true;
    }

    if(off){
      map.dwarf.damaged = true;
    }
    
    //main movement function call
   map.shift(map.velocity[0], map.velocity[1], map.goal);
  stage.removeAllChildren();
 // stage.addChild(round);
  
  
   for( i = 0; i < 500; i++){
    for(j = 0; j < 500; j++){
     blah[i][j].x = map.startX + (30 * i);
     blah[i][j].y = map.startY + (30 * j);
     if(vicinity(blah[i][j].x - 400 ,  blah[i][j].y - 400 )){
       stage.addChild( blah[i][j]);
     }
    }
   }
   
   var ouch = false;
   for(k = 0; k < 10; k++){
    planets[k].x = map.startX + coords[k] + 400*k;
    planets[k].y = map.startY + coords[k*2];
    if(planets[k].x > 0 && planets[k].x < width + 400 && planets[k].y > - 600 && planets[k].y < height){
      stage.addChild(planets[k]);
    }
    if(!ouch){
      ouch = suns[k].inradius(map.startX, map.startY, width/2, height/2 );
    }
       //cannot quite find the suns
    suns[k].bit.x= map.startX + suns[k].xpos;
    suns[k].bit.y = map.startY + suns[k].ypos;
    //vicinity(suns[k].bit.x, suns[k].bit.y)  
   // if(suns[k].bit.x > 0 && suns[k].bit.x < width + 400 && suns[k].bit.y > -600 && suns[k].bit.y < height  ){

      stage.addChild(suns[k].bit);
   // }

   }

   if(ouch){
    map.dwarf.damaged = true;
   }

   //map.astrUpdate();
   var fin = false;
/*
   for(i = 0; i < 100; i++){

       map.astr[i].sa.x = map.astr[i].X + map.startX;
       map.astr[i].sa.y = map.astr[i].Y + map.startY;
       if(map.astr[i].X + map.startX > -60 + width/2 && map.astr[i].X + map.startX < 10 + width/2 && map.astr[i].Y + map.startY > -60 + height/2 && map.astr[i].Y + map.startY < 10 + height/2){
         if(!supernova && astrwait <= 0){
        map.dwarf.hp = 0;
      }
       }
       if(vicinity(map.astr[i].sa.x, map.astr[i].sa.y)){
        stage.addChild(map.astr[i].sa);
       }

   }
   */

  if(map.dwarf.hp <= 0){
    if(!supernova){
      score -= 500;
      enddelay = 65;
    }
    supernova = true;
  }

//tokens for points
  for(i = 0; i < map.tokens.length; i++){
    if(!map.tokenz[i].collected){
    map.tokens[i].x = map.tokenz[i].x + map.startX;
    map.tokens[i].y = map.tokenz[i].y + map.startY;
    if(vicinity(map.tokens[i].x, map.tokens[i].y)){
      stage.addChild(map.tokens[i]);
    }
  }
  

    if(map.tokenz[i].collect(width/2, height/2, map.startX, map.startY)){
      score+= 100;
     // stage.removeChild(tokenz[i]);
    }
  }

  var xvalue = width/2;
  var yvalue = height/2;
   var won = false;
   
  if(map.goal.gx + map.startX  - 120 >  xvalue - 350 && map.goal.gx + map.startX  -120 <  xvalue + 350 && map.goal.gy + map.startY  - 120 > yvalue - 350
     && map.goal.gy + map.startY  - 120 < yvalue + 350){
    var xsif = 0;
  var ysif = 0;
  supernova = true;
  won = true;

  if(map.goal.gx + map.startX  + 60 > width/2){
    xsif = -7;
  }
  else{
    xsif = 7;
  }
  if(map.goal.gy + map.startY  + 60 > height / 2){
    ysif = -7;
  }
  else{
    ysif = 7;
  }
  map.accelerate(xsif, ysif);
  }
  
  Nsprite.x = width/2;
  Nsprite.y =  height/2;
  map.dwarf.checkup();
  map.dwarf.damaged = false;
  //minused - 400 offset

   loc.text =  "X: " + Math.floor(map.goal.gx + map.startX - 400) + " Y: " + Math.floor(map.goal.gy + map.startY - 400);

   scorey.text = "SCORE: " + score;
   stage.addChild(loc);

   stage.addChild(scorey);

   var celx = 0.0;

   var cely = 0.0;

   for(i = 0; i < 120; i++){
      var xcompare = beacons[i].x + map.startX + map.dwarf.x + xvalue;
      var ycompare = beacons[i].y + yvalue + map.startY + map.dwarf.y;
      if(xcompare > -60 && xcompare < width && ycompare > -60 && ycompare < height){
      }

     beacons[i].sp.x =  beacons[i].x + map.startX + xvalue;
     beacons[i].sp.y = beacons[i].y + map.startY + yvalue;
     if(vicinity(beacons[i].sp.x, beacons[i].sp.y)){
        stage.addChild(beacons[i].sp);
        beacons[i].sp.gotoAndPlay();
        if(beacons[i].touched){
           
          pulse[i].x = beacons[i].sp.x -15;
          pulse[i].y = beacons[i].sp.y - 15;
          stage.addChild(pulse[i]);
          pulse[i].gotoAndPlay();
        }

       // console.log( ' X ' + beacons[i].x + ' Y ' + beacons[i].y + ' Posistion ' +  i );
        // var beaconCX = map.startX + width/2 + beacons[i].x;
    // var beaconCY = map.startY  + height/2 + beacons[i].y;
      // console.log( ' X ' + beaconCX + ' Y ' + beaconCY + ' Posistion ' +  i );

     }

    beacons[i].calculatePolarity(map.startX, map.startY, width/2, height/2, 1 ,1);
    
    celx += beacons[i].accelx;
    
    cely += beacons[i].accely;

    if(celx < -6){
      celx = -6;
    }
    if(celx > 6){
      celx = 6;
    } 
    if(cely > 6){
      cely = 6;
    }
    if(cely < -6){
      cely = -6;
    }
}

map.accelerate(celx, cely);
    alter++;
    
    if (map.dwarf.boost && alter % 3 == 0){
      
      //alter info

    }

    if(map.dwarf.boost && alter % 3 == 1){
      //cover for boost
    }
   // if(vicinity( map.goal.gx + map.startX, map.goal.gy + map.startY)){
    portal.x = map.goal.gx + map.startX;
    portal.y =  map.goal.gy + map.startY;
    portal.scale
    stage.addChild(portal);
    portal.gotoAndPlay();
    stage.addChild(Nsprite); 
 //  }
    if(supernova){ 
         gameOver = true;
      enddelay += 1;
      if(enddelay > 63){
    var xpos = width/2 - 120;
    var ypos = height/2 - 150;
    BoomSprite.x =  xpos;
    BoomSprite.y = ypos;
    stage.addChild(BoomSprite); 
    BoomSprite.gotoAndPlay();
    if(won){
      //map.acceleration[0] = 0;
        //map.acceleration[1] = 0;
      if(enddelay == 90){
      
        astrwait = 100;
        score += 5000;
       
      }
      if(enddelay > 100){
        enddelay = 0;
         begin = false;
        supernova = false;
        //map.reset();
        astrwait = 100;
        begin = false;
      //  map.acceleration[0] = 0;
       // map.acceleration[1] = 0;
        for(i = 0; i < 120; i++){
          beacons[i].touched = false;
        }
        
      } 
    }
    else{
     if(enddelay > 100){
       supernova = false;
       enddelay = 0;
       //map.reset();
       astrwait = 100;
       begin = false;
       //map.acceleration[0] = 0;
       //map.acceleration[1] = 0;
       for(i = 0; i < 120; i++){
        beacons[i].touched = false;
       }
     }

    }
    }

   }
     //map.accelerate(accelx, accely);
   }
   else{
    stage.removeAllChildren();
//stage.addChild(round);
    if(!gameOver){

       var title = "BEACO";
       var fauxbutton = "START";
       var temptx = new createjs.Text(title,"20px Arial", "#00FF00");
       temptx.x = width/2 - 80;
       temptx.y = height/3;
       temptx.textBaseline = "alphabetic";
       stage.addChild(temptx);
       var tempter = new createjs.Text(fauxbutton, "20px Arial", "#FFFFFF");
        tempter.x = width/2 - 80;
        tempter.y = height - height/3;
        tempter.textBaseline = "alphabetic";
        stage.addChild(tempter);
    }
    else{
    var finalscore = "FINAL SCORE: " + score;
    var details = new createjs.Text(finalscore, "60px Arial", "#FFFFFF");
    //score.text = finalscore;
    //score.font = "40px Arial";
    //score.color = "white";
    details.x = width/2 - 350;
    details.y = height/3;
    details.textBaseline = "alphabetic";
    stage.addChild(details);
    
    }
   }

stage.update();
}


