console.log("Log: Reading script.js...");

let mainEl = document.getElementById('playing-cards')
const DeckRange = 10;
const CardTypes = getTypes(mainEl.getAttribute('data-types'));
const DealOut = 7;


console.log(`
  Deck range: ${DeckRange}\n
  Card types: [${CardTypes}]\n
  Deal out: ${DealOut}`); //


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
TODO: 
    REMEMBER:  To change the 'aria-describedby' to the correct card type
*/

/* TODO:  change this to an event handler */
/* https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener */
function deal() {
  console.log("deal-btn pressed"); //

 


}




console.log("Log: script.js read")
