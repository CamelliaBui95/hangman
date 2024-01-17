class KeyBoard {
  constructor() {
    this.alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
      ];
      this.letterDictionary = new Map();
      this.keyboard = document.getElementById("keyboard");
    }
    
    setUp() {
        this.clear();
        for (let i = 0; i < this.alphabet.length; i++) {
            const key = document.createElement("button");
            key.classList.add("key", "key-active");
            key.innerText = this.alphabet[i];
            this.letterDictionary.set(this.alphabet[i], key);
            this.keyboard.appendChild(key);
        }
    }

    clear() {
        this.letterDictionary.forEach((value, key) => value.remove());
        this.letterDictionary.clear();
    }

    disableKey(key) {
        this.letterDictionary.get(key).classList.remove("key-active");
        this.letterDictionary.get(key).classList.add("bg-red-200", "color-white")
        this.letterDictionary.get(key).disabled = true;
    }

    addListener(listener) {
        this.letterDictionary.forEach((value, key) => {
            value.addEventListener("click", () => listener(key));
        });
    }
}

export default KeyBoard;
