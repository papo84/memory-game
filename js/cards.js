const imagesNames = [];
for (let i=0; i<49; i++) imagesNames.push((i+1).toString());
const arrOfValidCardsNumber = ["8", "16", "24"]
const getCards = (numberOfCards) => {
    if(arrOfValidCardsNumber.indexOf(numberOfCards) == -1)
        throw new Error('Invalid cards number');
    //  Shuffle the cards and slice to the required number
    let shuffledNames = shuffle(imagesNames).slice(0, numberOfCards)
    //  Duplicate the cards to get pairs
    shuffledNames = shuffle([...shuffledNames, ...shuffledNames]);
    //  Turn the names into HTML elements
    return shuffledNames.map((item) => {return `<img class="img-fluid card-img" src="./img/${item}.png" />`});
}

/**
 * @description Shuffles cards randomly
 * @param {Array} cardsList
 * @returns {Array} Shuffled array
 */
const shuffle = function (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    for(let i=0;i<4; i++){
      while (0 !== currentIndex) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    }
    return array;
  }

export {getCards}