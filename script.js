/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */


/*640 is midden van X*/
/*360 is midden van Y*/

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;


var spelerX = 100; // x-positie van speler
var spelerY = 300; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 1100;   // x-positie van vijand
var vijandY = 300;   // y-positie van vijand





 // aantal behaalde punten






/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill(193,222,246);
  rect(20, 20, width - 2 * 20, height - 2 * 20);
 
  
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */

var tekenVijand = function(x, y) {

  fill(25,96,156);
  rect (x,y,50,200);  
  };





/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */

var tekenSpeler = function(x, y) {
  fill(25,96,156);
  rect(x, y, 50, 200);
};




/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */


var tekenKogel = function(x, y) {
fill(80,80,90)
ellipse(640,360,70,70); 
};




/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */

var beweegVijand = function() {

     if (keyIsDown(LEFT_ARROW)) {
    vijandX = vijandX - 6;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    vijandX = vijandX + 6;
  }
  if (keyIsDown(UP_ARROW)) { 
  vijandY = vijandY - 6;

  }
  if (keyIsDown(DOWN_ARROW)) {
    vijandY = vijandY + 6;
  }
}

var beweegBal = function() {
    

};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */

var beweegKogel = function() {

}



/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {
 
 if (keyIsDown(65)) {
    spelerX = spelerX - 6;
  }
  if (keyIsDown(68)) {
    spelerX = spelerX + 6;
  }
  if (keyIsDown(87)) { 
  spelerY = spelerY - 6;

  }
  if (keyIsDown(83)) {
    spelerY = spelerY + 6;
  }
};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background(205,218,229);
  
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();

      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenKogel(kogelX, kogelY);
      tekenVijand (vijandX, vijandY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}



