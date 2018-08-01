
var shipstory = "";
var verbs = new Array("lick");
var adjs = new Array("oily");
var feelings = new Array("smug");
var nouns = new Array("bicycle tire");
var qA =  document.createTextNode("Please state a noun:");
var qB  = document.createTextNode("Please state a verb:");
var qC = document.createTextNode("Please state an adjective:");
var qD = document.createTextNode("Please state an emotion:");
var introclip = false;
var Clfade = new Array(255, 255, 255);
var vertPad = 0;
var limit = 0;
var storyChoice = 0;
var next = false;
var qnum = 0;
var verba = 0;
var nouna = 0;
var adja = 0;
var schoolstory = "";
var chefstory = "";
var feela = 0;
var resolution = 9;
var titles = new Array("The Pirates Booty", "The Possessed School Nun", "A Chef's Tale");
var storyTitle = document.getElementById("storyT");
var section = document.getElementById("bod");
var statment = document.getElementById("question");
var answers = document.getElementById("answer");
var initiate = document.getElementById("sub");
var start = 0;

rand = Math.floor(Math.random() * 3);
storyChoice = rand;
start = rand;
storyTitle.firstChild.textContent = titles[storyChoice];
//storyTitle.appendChild(document.createTextNode(titles[storyChoice]));

function addWord(type, string){
	if(type == 0){
		verbs.push(string);
		verba -= 1;
	}
	if(type == 1){
		adjs.push(string);
		adja -= 1;
	}
	if(type == 2){
		nouns.push(string);
		nouna -= 1;
	}
	if(type == 3){
		feelings.push(string);
		feela -= 1;
	}
}

function noun(){
    quant = nouns.length;
    roulette = Math.floor( Math.random() * quant);
    value = nouns[roulette];
    if(quant > 1){
    	nouns[roulette] = nouns[quant - 1];
    	 nouns.pop();
    }
    return value;
}

function verb(){
	 quant = verbs.length;
    roulette = Math.floor( Math.random() * quant);
    value = nouns[roulette];
    value = verbs[roulette];
    if(quant > 1){
    	verbs[roulette] = verbs[quant - 1];
    	 verbs.pop();
    }
    return value;

}

function adj(){
    quant = adjs.length;
    roulette = Math.floor( Math.random() * quant);
    value = nouns[roulette];
    value = adjs[roulette];
    if(quant > 1){
    	adjs[roulette] = adjs[quant - 1];
    	 adjs.pop();
    }
    return value;

}

function feeling(){
	 quant = feelings.length;
    roulette = Math.floor( Math.random() * quant);
    value = nouns[roulette];
    value = feelings[roulette];
    if(quant > 1){
    	feelings[roulette] = feelings[quant - 1];
    	 feelings.pop();
    }
    return value;

}

function DE(path){
	
	if(start == 0){
      verba = 4;
      adja = 5;
      nouna = 6;
      feela = 1;
      resolution = 0;
      statment.appendChild(qB);
	}

	if(start == 1){
		verba = 5;
		nouna = 4;
		adja = 6;
		feela = 2;
		resolution = 1;
		statment.appendChild(qB);
	}
  if(start == 2){
    verba = 6;
    nouna = 7;
    adja = 10;
    feela  = 3;
    resolution = 2;
  }

  if(start == 2){

  
  }

	answers.style.visibility = "visible";
	initiate.style.visibility = "visible";
	start = 9;
	if(feela > 0){
		statment.removeChild(statment.firstChild);
	}
	if(verba > 0){
		
		statment.appendChild(qB);
	     initiate.onclick = function() { addWord(0, answers.value); answers.value = ""; DE(9);} 
          // answers.onkeypressed = function(e){ } 


}
    else if(verba <= 0 && adja > 0){
		
		statment.appendChild(qC);
        initiate.onclick = function() { addWord(1, answers.value); answers.value = ""; DE(9);} 
          // answers.onkeypressed = function(e){ } 
           // answers.onkeypressed = function(e){
  
        //}
	}
	else if(adja <= 0 && nouna > 0){
	
		statment.appendChild(qA);
        initiate.onclick = function() { addWord(2, answers.value); answers.value = ""; DE(9);} 
          // answers.onkeypressed = function(e){ } 
          //answers.onkeypressed =function(e){
        	
        //}
	}
	else if( nouna <= 0 && feela > 0){
      
		statment.appendChild(qD);
		initiate.onclick = function() { addWord(3, answers.value);  answers.value = ""; DE(9);} 
          // answers.onkeypressed = function(e){
        	
        //}
	}
	
	if (feela <= 0){
		construct();
		answers.style.visibility = "hidden";
		statment.style.visibility = "hidden";
	initiate.style.visibility = "hidden";
	storyTitle.style.visibility = "visible";
	pref = document.getElementById("tale");
	if(pref.firstChild == null){
	 if(resolution == 0){
	temp = document.createTextNode(shipstory);
}
if(resolution == 1){
      temp = document.createTextNode(schoolstory);
	}
  if(resolution == 2){
     temp = document.createTextNode(chefstory);
  }
	pref.appendChild(temp);
}
}
	}



section.onclick = function(){
	if(next){
	  //alert("blah");
	  storyTitle.style.visibility = "hidden";
	  DE(storyChoice);
	}

};
    // alert("blah");
      var costring = "rgb(" +  Clfade[0] + ", " + Clfade[1] + ", " + Clfade[2] + " )" ;
     storyTitle.style.color = costring;
     function repeat(val) {
     	setTimeout(function(){
     		costring = "rgb(" + Clfade[0] + ", " + Clfade[1] + ", " + Clfade[2] + " )";
	storyTitle.style.color = costring;
	Clfade[0] -= 8;
	Clfade[1] -= 8;
	Clfade[2] -= 8;
    limit++;
    if(limit == 30){ next = true;}
    storyTitle.style.paddingTop = "" + (limit*2) + "px";
    }, val * 80);
     }
     for(var i = 0; i < 30; i++){
     	repeat(i);
     }
     
  
 function construct(){
 	if(resolution == 0){
shipstory += " Your are a crewmember of the " + adj() 
+ " pirate ship the " 
+ verb() 
+ "ing rooster. today your you and the crew must " 
+ verb()
 + " the sails. As you continue to follow your superiors requests. A spry nubile pirate lass with a "
  + noun() 
  +  " on her belt strolls passed you. you feel a surge of " 
  + feeling() 
  + " in your " 
  + noun() 
  + ". While you daydream about " 
  + noun() 
  +  " your superior " 
  + adj() 
  + "ly smacks you over the head with a " 
  + noun() 
  + ". get back to work he says. As the day came to a close you rested " 
  + adj() 
  + "ly in your hammock. just as you were about to get to sleep. The " 
  + adj() 
  + " pirate on guard duty sounded the alarm. You rushed onto the deck to see what the commotion was. In the eery moonlight a gargantuan sea serpent with 300 eyes " 
  + verb() 
  + "ed several crew members in quick seccession. The nubile pirate babe you saw earlier in the day was fiercly fighting the beast, weilding a " 
  + noun() 
  + ". To distract the sea serpent you " 
  + verb() 
  + ". perplexed the serpent scratched its head and mumbled "
   + adj() 
   + "ly. together you and the pirate lady slew the serpent with a " 
   + noun()
    + ". You found a chest in the serpents stomach and made grilled unagi out of its corpse. The contents of the chest was not as profound as that pirates booty.  THE END."; 
}
if(resolution == 1){
schoolstory += "As a student of the academy of "
+ noun()
+ "s. You must complete a number of assignments per semester inorder to graduate with your "
+ adj()
+ " degree in the study of "
+ noun() 
+ " your "
+ adj() + " best friend Gillie was helping you with an assignment when you both received a text about a nun "
+ verb() + "ing somebody in the cafeteria " + "in utter dismay you both furiously " + verb() + " out of shock." 
+" you both run towards the cafeteria, gillie looks very " + feeling() + " on the way down..."
+ "A possessed " +
adj() + " nun in the cafeteria is hurling lunch at high velocity in all directions "
+ " she summons a " + noun() + " from an extrademensional portal and starts to " + verb()
+ "... before the situation gets anymore out of hand you " + adj() + "ly call the ghost busting division of the academy. "
+ "gillie is very scared and starts to "
+ verb() +
". The ghost busting squad uses a pair of plyers, a tube sock, and your lucky " + noun()
+ " to save the day, many of the students who survived the demonic onslaught now are filled with profound " + feeling()
+ " you and Gillie return to your assignment but to cope with the residual spiritual energy you decide to " + verb()
+ " each other tell you seem " + adj()
 + ". The tale of the possessed school nun will be a legend in these halls for years to come... THE END"; }
 if(resolution == 2){

 chefstory = " It is your job to make food for the paying customers without any unessesary delays!, yelled your boss as he smashed his fist on a "
+ noun()
+ ". He looked very "
+ adj()
+ ". This was not the first time the owner of the restaurant had yelled at you for not "
+ verb() + "ing your meat fast enough to prep for the "
+ adj() + " stew. It will be fine you told yourself.. Nobody is as good at cooking and also equally good at "
+ verb() + "ing..  The boss would never fire you. Not even in a million years. Even if you stole "
+ noun() + " from him. No other cook could replace you. A waiter jaunts "
+ adj() + "ly with a " + feeling()
+ " look on her face, Order up she mumbled... you were shocked to find that the ingredients of the super ultra, "
+ adj() 
+ ", " + adj() 
+ "  , casserole deluxe was....  " 
+ noun() + ", " + noun() + ", and " + noun()
+ ". you shivered with, " 
+ adj()
+ " to prepare you " 
+ verb()
+ "ed, multiple times, then you began the task at hand, you only had 32 minutes to prepare the dish from memory you felt very "
+ feeling()
+ ". everybody assembled all of the ingredients and began to "
+ verb()
+ " with the other cooks, 15 minutes later, a short order for hot "
+ adj()
+ " crab cakes was given to the kitchen by the " 
+ verb() 
+ "ing waiter hans, you assign Darla to the task, which meant my best suu chef was out of comission I frantically contiued at a precise pace, One of my understudies started cursing about "
 + adj() 
 + " "
 + noun()
 + "s, so the manager fires his ass." 
 + "as the thirty five minute mark passes you " 
 + verb() 
 + "the dish and give it to the waiter."
 + " You are exausted and crumple into a ball, you let out a sigh of "
 + feeling()
 + ". As the day comes to a close a funny looking man with a " 
 + noun() 
 + " tells you he was a food critic and that your dish blew him away and he wanted to give you a refferal to the "
 + adj() + " global cooking championship, he tips his hat and tells you the secret ingredient in the first stage is going to be " + noun()
 + ". You are extremely exited for the competion and hope you will win and continue your journey on this Chefs Tale.... THE END";
 }
}
