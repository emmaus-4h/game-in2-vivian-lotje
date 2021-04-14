/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

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

var speler1X = 200; // x-positie van speler
var speler1Y = 100; // y-positie van speler

var speler2X = 800;    // x-positie van kogel
var speler2Y = 500;    // y-positie van kogel

var balX = 0;   // x-positie van vijand
var balY = 0;   // y-positie van vijand

var score = 0; // aantal behaalde punten






/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill(35,110,0);
  rect(20, 20, width - 2 * 20, height - 2 * 20);
 
  
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenBal = function(x, y) {
    

};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler1 = function(x, y) {
fill ('white')
ellipse (x, y, 75, 75)

};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler2 = function(x, y) {
  fill("white");
  ellipse(x, y, 75, 75);
};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegBal = function() {
    
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegSpeler1= function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler2 = function() {

};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkSpeler1Geraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpeler2Geraakt = function() {
    
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
  background('blue');
  
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegBal();
      beweegSpeler1();
      beweegSpeler2();

      if (checkSpeler1Geraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpeler2Geraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenBal(balX, balY);
      tekenSpeler1(speler1X, speler1Y);
      tekenSpeler2(speler2X, speler2Y);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
