class Background {
  constructor() {
    this.backgrounds = [
      "hangman-1",
      "hangman-2",
      "hangman-3",
      "hangman-4",
      "hangman-5",
      "hangman-6",
      "hangman-7",
      "hangman-8",
      "hangman-9",
      "hangman-10",
      "hangman-11",
    ];
    this.background = document.getElementById("display");
  }

  setNewBackground(index) {
    if (index >= this.backgrounds.length) return;

    if (index === 0)
      this.background.classList.replace("hangman-11", this.backgrounds[index]);
    else {
      const prevBg = this.backgrounds[index - 1];
      this.background.classList.replace(prevBg, this.backgrounds[index]);
    }
  }
}

export default Background;
