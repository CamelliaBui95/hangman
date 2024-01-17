import Letter from "./letter.js";

class Letters {
    
    lettersDisplay = document.getElementById("letters-display");
    lettersGroup = [];

    constructor() {
        this.word = "";
        this.wordLength = 0;
        this.counter = 0;
        this.displayLetter = this.displayLetter.bind(this);
    }

    setWord(newWord) {
        this.word = newWord;
        this.wordLength = this.word.length;
        this.setUp();
    }

    setUp() {
        this.clear();
        for (let i = 0; i < this.wordLength; i++) {
            const letter = new Letter();
            this.lettersGroup.push(letter);
            this.lettersDisplay.appendChild(letter.getLetterGroup());
        }
    }

    clear() {
        this.counter = 0;
        if (this.lettersGroup.length > 0) {
            for (let i = 0; i < this.lettersGroup.length; i++)
                this.lettersGroup[i].remove();

            this.lettersGroup = [];
        }
    }

    displayLetter(index, letter) {
        this.lettersGroup[index].setLetter(letter);
        this.lettersGroup[index].displayLetter();
        this.counter++;
    }
}

export default Letters;