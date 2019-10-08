var inquirer = require("inquirer");
var colors = require("colors");

var Word = require("./word.js");

var chances = 10;

var words = ["apple", "pear", "orange", "grapefruit", "mandarin", "lime", "nectarine", "apricot", "peach", "plum", "pineapple", "banana", "mango", "strawberry", "raspberry", "blueberry", "kiwi", "passionfruit", "watermelon", "honeydew", "tomato", "avocado"];

function ask() {
    console.log("\n" + target.toString() + "\n");
    inquirer.prompt([
        {
            name: "guess",
            message: "Pick a letter:",
        }
    ]).then(function (res) {
        if (target.guess(res.guess)) {
            console.log("CORRECT!".green);
            if (target.isComplete()) {
                console.log("YOU WIN!".green);
                console.log(target.toString());
                newGame();
            } else {
                ask();
            }
        } else {
            console.log("WRONG!".red);
            chances--;
            console.log(`${chances} CHANCES LEFT!`.yellow);
            if (chances <= 0) {
                console.log("YOU LOSE!".red);
                return;
            }
            ask();
        }
    });
}

function newGame() {
    console.log("NEW WORD:".cyan);
    chances = 10;
    target = new Word(words[Math.floor(Math.random() * words.length)]);
    target.build();
    ask();
}

newGame();