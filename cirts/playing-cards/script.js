let mainEl = document.getElementById('playing-cards')
const DeckRange = 10;
const CardTypes = getTypes(mainEl.getAttribute('data-types'));
const DeckSize = 7;

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

// creates a string of emojies in span elements
function getEmojiHTMLString(emoji, num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += `<span>${emoji}</span>`;
  }
  return str;
}

// generates and populates one card 
function newCard(cardId) {
  let typeIndex = Math.floor(Math.random() * CardTypes.length);
  let type = CardTypes[typeIndex];
  let num = Math.floor(Math.random() * DeckRange) + 1;

/*
TODO: 
    This is not working... fix it so it does
*/
  let card = document.getElementById(cardId);
  switch (type) {
    case "😋":
      card.setAttribute("aria-describedby", "face-emoji");
      break;
    case "😈":
      card.setAttribute("aria-describedby", "devil-emoji");
      break;
    case "🦆":
      card.setAttribute("aria-describedby", "duck-emoji");
      break;
    case "🍰":
      card.setAttribute("aria-describedby", "cake-emoji");
      break;
    default:
      console.log("Error: aria-describedby not updated...")
  }

  console.log(`
card: ${cardId}
type: '${CardTypes[typeIndex]}'
num: ${num}
aria: ${card.getAttribute("aria-describedby")}
`)//

  let numArr = document.querySelectorAll(`#${cardId} .num`);
  for (let i = 0; i < numArr.length; i++ ) {
    numArr[i].innerHTML = `${num}`;
  }

  let typeArr = document.querySelectorAll(`#${cardId} .type`); 
  // set new type
  for (let i = 0; i < typeArr.length; i++) {
    typeArr[i].innerHTML = CardTypes[typeIndex];
  }

  // TODO: set .middle top and bottom
  // set top and bottom areas to emoji strings representing the card number
  let top = Math.ceil(num / 2);
  let bottom = num - top;

  let topStr = getEmojiHTMLString(CardTypes[typeIndex], top);
  let bottomStr = getEmojiHTMLString(CardTypes[typeIndex], bottom);
  document.querySelector(`#${cardId} .top`).innerHTML = topStr;
  document.querySelector(`#${cardId} .bottom`).innerHTML = bottomStr;

}

/* TODO:  change this to an event handler */
/* https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener */
function deal() {
  // loop cards and repopulate
  for (let i = 1; i <= DeckSize; i++) {
    newCard(`card${i}`);
  }

}

