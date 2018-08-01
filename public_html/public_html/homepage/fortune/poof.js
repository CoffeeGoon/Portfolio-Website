


var img;
var stage;
var ground;
var card;
var choice;
var cards;
var fortuna;
var BCard;
var engage = 1;
var distance = 3;
var magnitude = 1;
var angle = Math.PI / 60;
var step = 120;
	function init() {
	
		//wait for the image to load
		 canvas = document.getElementById("testCanvas");
		stage = new createjs.Stage(canvas);
		 card = new createjs.Bitmap( "fortune/card.png");
		 ground = new createjs.Bitmap("fortune/starBook.png");
		   card.x = 430;
		   card.y =  350;
		   card2 = card.clone();
		   card3 = card.clone();
		   card4 = card.clone();
		   card5 = card.clone();
		   card6 = card.clone();
		   card7 = card.clone();
		   card8 = card.clone();
		   card9 = card.clone();
		   card10 = card.clone();
		   BCard = card.clone();
		   BCard.x = -600;
		   BCard.y = -600;
		   cards = new Array(card, card2, card3, card4, card5, card6, card7, card8, card9, card10);
		   stage.addChild(ground);
		  stage.addChild(cards[0]);
		   stage.addChild(cards[1]);
		    stage.addChild(cards[2]);
		     stage.addChild(cards[3]);
		      stage.addChild(cards[4]);
		       stage.addChild(cards[5]);
		        stage.addChild(cards[6]);
		         stage.addChild(cards[7]);
		          stage.addChild(cards[8]);
		           stage.addChild(cards[9]);
		           stage.addChild(BCard);
		           var t1 = new createjs.Bitmap("fortune/for1.png");
		           var t2 = new createjs.Bitmap("fortune/for2.png");
		           var t3 = new createjs.Bitmap("fortune/for3.png");
		           var t4 = new createjs.Bitmap("fortune/for4.png");
		           var t5 = new createjs.Bitmap("fortune/for5.png");
		           var t6 = new createjs.Bitmap("fortune/for6.png");
		           var t7 = new createjs.Bitmap("fortune/for7.png");
		           var t8 = new createjs.Bitmap("fortune/for8.png");
		           var t9 = new createjs.Bitmap("fortune/for9.png");
		            var t10 = new createjs.Bitmap("fortune/for10.png");
		           var t11 = new createjs.Bitmap("fortune/for11.png");
		           var t12 = new createjs.Bitmap("fortune/for12.png");
		           var t13 = new createjs.Bitmap("fortune/for13.png");
		           var t14 = new createjs.Bitmap("fortune/for14.png");
		           var t15 = new createjs.Bitmap("fortune/forPrime.png");
		           var t16 = new createjs.Bitmap("fortune/for15.png");
		           var t17 = new createjs.Bitmap("fortune/for16.png");
		            var t18 = new createjs.Bitmap("fortune/for17.png");
		           var t19 = new createjs.Bitmap("fortune/for18.png");
		           var t20 = new createjs.Bitmap("fortune/for20.png");
		        
                   fortuna = new Array(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20);
                  choice = Math.floor(Math.random() * 21);
                  fortuna[choice].x = -600;
				fortuna[choice].y = 0;
				stage.addChild(fortuna[choice]);
				
		  createjs.Ticker.addEventListener("tick", tick);
		  stage.addEventListener("stagemousedown", fortune);
		}
			
			function fortune(){

               engage = 0;
               if(step > 480){
               	step = 120;
               	engage = 1;
               	distance = 3;
                magnitude = 1;
                 fortuna[choice].x = -600;
				fortuna[choice].y = 0;
				BCard.setTransform( 0, 0 ,  1, 1 );
				 BCard.x = -600;
		          BCard.y = -600;
                 choice = Math.floor(Math.random() * 21);
                  fortuna[choice].x = -600;
				fortuna[choice].y = 0;
				stage.addChild(fortuna[choice]);

		
               }
			}

		function tick(){
			if(engage == 0){
			
			for(i = 0; i < cards.length; i++){


			cards[i].x = 400 + Math.round(1.8 * magnitude * Math.cos((step + (i*distance)) * angle));
			cards[i].y = 300 + Math.round(1.6 * magnitude * Math.sin((step + (i*distance)) * angle));
		}
			step = step + 1;
			if(distance < 12 ){
               distance = distance + 1;

			}
			if(magnitude < 100 ){
				magnitude = magnitude + 1;
			}
			if(step == 320){
				BCard.x = cards[6].x;
				BCard.y = cards[6].y;

			}

			if(step > 320 && step < 450){
				
				if(BCard.x < 400){
					BCard.x = BCard.x + 2;
					alter = 1;
				}
				if(BCard.x > 403){
				BCard.x = BCard.x - 2;
				

				}
				if(BCard.y < 300){
					BCard.y = BCard.y + 2;
					
				}
				if(BCard.y > 303){
				BCard.y = BCard.y - 2;
				}
				
				
			}
			if(step >= 450 && step < 460){
					var scale = step - 450;
					var swig = 120 + scale*20;
					var dx = 400 - 20*scale;
					var dy = 300 - 26*scale;
					BCard.setTransform( dx, dy ,  swig/100, swig/100 );
				}
				if(step >= 480){
                      var scale = step - 479;
                      var div = 150 + (scale*60);
                      dx = 220 + 12*scale;
                      var dag = 1800;
                      var xmorph = 578;
                      if(div < 1300){
					BCard.setTransform( dx, 66,  300/div, 3/1  );
                   }
                   if(div >= 1300){
                   	BCard.x = - 400;
                   	dag = dag - 120*(scale - 19);
                   	xmorph = xmorph - 24*(scale - 19);
                   	if(dag > 100){
                   	fortuna[choice].setTransform(xmorph, 60, 100/dag, 1/1);
                    }

                  }


				}
				


		}

		if(engage == 1){
			
			for( k = 0; k < cards.length; k++){
				cards[k].x = 400 - (k*2);
				cards[k].y = 300;
			}
	}
		
			stage.update();
		}	

	

