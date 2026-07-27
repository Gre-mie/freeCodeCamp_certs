console.log("Log: Reading script.js...");

let mainEl = document.getElementById('playing-cards')
const DeckRange = 10;
const CardTypes = getTypes(mainEl.getAttribute('data-types'));
const DeckSize = 7;


console.log(`
  Deck range: ${DeckRange}\n
  Card types: [${CardTypes}]\n
  Deck size: ${DeckSize}`); //



// returns an array of emojies - emojies count as more than one charactor when indexing
function getTypes(str) { 
  // check for bad types
  if (typeof str === 'undefined') {
    console.log(`WARNING: getTypes() was given undefined value`); 
    return [];
  }
  if (str === null) {
    console.log(`WARNING: getTypes() was given null value`); 
    return [];
  }
  // split emoji string into array
  let emojiArr = [...str];

  return emojiArr;
}

  /*
   * - add number id to each card in html, card1
   * - append 'i' when searching, querySelectorAll, getElementById
   *   'card${i} middle'
   *   'card${i} type'
   *   'card${i} num'
   */

// generates and populates one card 
function newCard(card) {
  let typeIndex = Math.floor(Math.random() * CardTypes.length);
  let num = Math.floor(Math.random() * DeckRange) + 1;

  console.log(`
type index: ${typeIndex}
type: ${CardTypes[typeIndex]}
num: ${num}
`)

  console.log("newCard funciton card: ")
  console.log(card)

}




/*
TODO: 
    REMEMBER:  To change the 'aria-describedby' to the correct card type
*/

/* TODO:  change this to an event handler */
/* https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener */
function deal() {
  console.log("deal-btn pressed"); //

  // loop cards and repopulate
  for (let i = 1; i <= DeckSize; i++) {
    newCard(document.getElementById(`card${i}`));
  }





}


deal(); // testing

console.log("Log: script.js read")
