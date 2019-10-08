var Letter = function (_letter) {
    this.blank = "_";
    this.guessed = false;
    this.letter = _letter;
    this.toString = function () {
        return this.guessed ? this.letter : this.blank;
    };
    this.check = function (guess) {
        if (guess === this.letter) {
            this.guessed = true;
            return true;
        }
        return false;
    }
}

module.exports = Letter;