class Letter {
  constructor() {
    this.letter = document.createElement("p");
    this.letter.classList.add("letter", "letter-hidden");
    this.letter.innerText = "Z";

    this.underscore = document.createElement("span");
    this.underscore.classList.add("underscore");

    this.group = document.createElement("div");
    this.group.classList.add("letter-group");

    this.group.appendChild(this.letter);
    this.group.appendChild(this.underscore);
  }

  getLetterGroup() {
    return this.group;
  }

  setLetter(newLetter) {
    this.letter.innerText = newLetter;
  }

  displayLetter() {
    this.letter.classList.remove("letter-hidden");
  }

  remove() {
    this.group.remove();
  }
}

export default Letter;
