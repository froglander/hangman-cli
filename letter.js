/*** This is my Letter constructor.  It has three properties
 * letter is the character passed to it
 * placeholder is a hardcoded value to be the placeholder, could maybe have that as a parameter too
 * guessed is used to determine if the letter or the placeholder should be displayed
 * */
const Letter = function(character) {
    this.letter = character.toUpperCase();
    this.placeholder = '-';
    this.guessed = false;
}

/*** Just playing with prototype methods.  This one just returns the letter */
Letter.prototype.getCharacter = function() {
    return this.letter;
}

/*** And this one returns whatever character should be displayed, either
 * the letter or the placeholder
 */
Letter.prototype.getDisplayCharacter = function() {
    if(this.guessed) {
        return this.letter;
    } else {
        return this.placeholder;
    }
}

module.exports = Letter;