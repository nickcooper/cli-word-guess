var Letter = require("./letter.js");

var Word = function (_word) {
    this.word = _word;
    this.letters = [];
    this.build = function () {
        var splitWord = this.word.split("");
        for (var i = 0; i < splitWord.length; i++) {
            this.letters.push(new Letter(splitWord[i]));
        }
    };
    this.guess = function (guess) {
        var found = false;
        this.letters.forEach (function (letter) {
            if (letter.check(guess)) {
                found = true;
            };
        });
        return found;
    };
    this.toString = function () {
        return this.letters.map(x => x).join(" ");
    };
    this.isComplete = function () {
        return this.letters.every(x => x.guessed === true);
    }
}

module.exports = Word;