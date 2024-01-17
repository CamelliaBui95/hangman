import Prompt from "./components/prompt.js";
import Letters from "./components/letters.js";
import KeyBoard from "./components/keyboard.js";
import Background from "./components/background.js";

const words = ["HELLO", "CAT", "FLE", "EX"];
let remainingWords = [...words];
let failCount = 0;
let currentWord = "";
let currentIndex = -1;

const prompt = new Prompt();
const playBtn = prompt.getButton();
const letters = new Letters();
const background = new Background();
const keyboard = new KeyBoard();
keyboard.setUp();

const setRandomWord = (words) => {
    currentIndex = Math.floor(Math.random() * words.length);
    currentWord = words[currentIndex];
};

const handleKeyClick = (key) => {
    if (failCount >= 10)
        return;

    if (!currentWord.includes(key)) {
        failCount += 1;
        if (failCount === 10) {
          background.setNewBackground(failCount);
          prompt.setMessage("You've lost :(");
          prompt.setButtonLabel("Restart");
          prompt.displayPrompt();
          return;
        }
        keyboard.disableKey(key);
        background.setNewBackground(failCount);
    }

    let index = currentWord.indexOf(key);

    while (index > -1) {
        const start = currentWord.substring(0, index);
        const end = currentWord.substring(index + 1);
        currentWord = start + "*" +  end;
     
        letters.displayLetter(index, key);
        index = currentWord.indexOf(key);
    }
}

const handleNewLevel = () => {
    remainingWords = [...remainingWords.slice(0, currentIndex), ...remainingWords.slice(currentIndex + 1)];

    if (remainingWords.length === 0)
        return;
    const idTimeOut = setTimeout(() => {
        setUp();
        clearTimeout(idTimeOut);
    }, 2000);
    
}

letters.addHandler(handleNewLevel);

const setUp = () => {
    failCount = 0;
    setRandomWord(remainingWords);
    letters.setWord(currentWord);
    keyboard.setUp();
    keyboard.addListener(handleKeyClick);
    background.setNewBackground(0);
}

playBtn.addEventListener("click", () => {
    prompt.hidePrompt();
    remainingWords = [...words];
    setUp();
});


