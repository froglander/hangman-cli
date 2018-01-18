// Require the letter constructor file
const Letter = require("./letter");

/* ********************************************************************************** */
/** Comment out all this stuff that we used for testing Letter */
// Create a new instance of the Letter object and pass it a hardcoded value for now
// let myLetter = new Letter("a");

// Test out my object methods
// This one just displays the character
// console.log("myLetter:", myLetter.getCharacter());

// This one displays the displayCharacter, which in this case should be the placeholder
// because the constructor defaults guessed to false
// console.log("displayCharacter:", myLetter.getDisplayCharacter());

// Set the value of guessed to true and get the displayCharacter again
// myLetter.guessed = true;
// console.log("displayCharacter guessed true:", myLetter.getDisplayCharacter());
/* ********************************************************************************** */


/** So now that we know we can access the Letter methods, how do we think Word could work?
 * Let's imagine we have a word
 * We want to be able to display that word as a bunch of Letters, so maybe if 
 * we had an array of Letter objects to store the letters of the word?
 * Then we could update a particular index based on if that letter was guessed or not?
  */

  const Word = function(targetWord) {
      // This is the word passed in turned into an array
      this.wordObjLetterArray = targetWord.split("").map((letter) => { return new Letter(letter)});
      // This is now an array of Letter objects
    //   this.wordObjLetterArray = this.createWordLetterArray();
  }

  
//   Word.prototype.createWordLetterArray = function() {    
//       // Here we use map to create a new array of Letter objects
//       const myWordLetterArray = this.targetWordArray.map((letter) => {
//           var myLetter = new Letter(letter);
//           return myLetter;
//       });
//       // Now we need to return the new array.  This will now be what is stored in this.wordObjLetterArray
//       return myWordLetterArray;
//   }

  Word.prototype.displayWord = function() {
    // console.log("Display current word with placeholders here");
    // So at this point, I need to display the current status of the word, with letters and placeholders

    // Display this.wordObjLetterAray
    // console.log(this.wordObjLetterArray);
    // We have a method for the Letter object that returns the display character, maybe we can use this?
    let myDisplayWord = "";
    this.wordObjLetterArray.forEach(element => {
        myDisplayWord += element.getDisplayCharacter();
    });
    console.log(myDisplayWord);
  }

  Word.prototype.displayAnswerWord = function() {
    // console.log("Display current word here");
    // So at this point, I need to display the current status of the word, with letters and placeholders

    // Display this.wordObjLetterAray
    // console.log(this.wordObjLetterArray);
    // We have a method for the Letter object that returns the display character, maybe we can use this?
    let myDisplayWord = "";
    this.wordObjLetterArray.forEach(element => {
        myDisplayWord += element.getCharacter();
    });
    console.log(myDisplayWord);
  }

  Word.prototype.checkLetter = function(guessedLetter) {
    //   console.log("guessedLetter:", this.wordObjLetterArray.indexOf(guessedLetter));
      // Index of won't work because it's an array of objects, so maybe we just loop through it each time?
      this.wordObjLetterArray.forEach((character) => {
        if(character.getCharacter() === guessedLetter) {
            character.guessed = true;
            // console.log("match", i.getCharacter());
        // } else {
            // console.log("doesn't match");
        }        
      });
      this.displayWord();
  }

  module.exports = Word;