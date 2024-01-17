class Prompt {
    constructor() {
        this.prompt = document.getElementById("prompt");
        this.message = document.getElementById("message");
        this.btn = document.getElementById("play-btn");
    }

    displayPrompt() {
        this.prompt.classList.remove("hidden");
    }

    hidePrompt() {
        this.prompt.classList.add("hidden");
    }

    setMessage(newMsg) {
        this.message.innerHTML = newMsg;
    }

    setButtonLabel(newLabel) {
        this.btn.innerText = newLabel;
    }

    getButton() {
        return this.btn;
    }
}

export default Prompt;