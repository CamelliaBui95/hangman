import Prompt from "./components/prompt.js";
import Letters from "./components/letters.js";
import KeyBoard from "./components/keyboard.js";

const words = ["HELLOO", "CAT", "FLOWER"];
let pointer = 0;
let failCount = 0;
let currentWord = words[pointer];

const handleKeyClick = (key) => {
    if (!currentWord.includes(key)) {
        failCount += 1;
        if (failCount === 10) {
            prompt.setMessage("You've lost !");
            prompt.setButtonLabel("Restart");
            prompt.displayPrompt();
            return;
        }

        keyboard.disableKey(key);
    }

    let index = currentWord.indexOf(key);

    /*const start = currentWord.substring(0, index);
    const end = currentWord.substring(index + 1);
    currentWord = start + "*" + end;

    letters.displayLetter(index, key);
    index = currentWord.indexOf(key);*/

    while (index > -1) {
        const start = currentWord.substring(0, index);
        const end = currentWord.substring(index + 1);
        currentWord = start + "*" +  end;
     
        letters.displayLetter(index, key);
        index = currentWord.indexOf(key);
    }
}

const keyboard = new KeyBoard();
keyboard.setUp();

const prompt = new Prompt();
const playBtn = prompt.getButton();
const letters = new Letters();


playBtn.addEventListener("click", () => {
    prompt.hidePrompt();
    letters.setWord(currentWord);
    keyboard.setUp();
    keyboard.addListener(handleKeyClick)
});

