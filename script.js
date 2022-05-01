const apple = document.getElementById("apple");
const grapes = document.getElementById("grapes");
const orange = document.getElementById("orange");
const pear = document.getElementById("pear");
const watermelon = document.getElementById("watermelon");
const unknown = document.getElementById("unknown");

const button = document.getElementById("button");
var recognition = new webkitSpeechRecognition();

function clearVisibility() {
    apple.style = "display: none;";
    grapes.style = "display: none;";
    orange.style = "display: none;";
    pear.style = "display: none;";
    watermelon.style = "display: none;";
    unknown.style = "display: none;"
}

function help() {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en";
    speech.text = "Say the name of one of the objects on the screen. Say about to hear more about the program";
    speechSynthesis.speak(speech);
}

button.addEventListener("click", () => {
    if (button.innerText === "Speak") {
        recognition.start();
        button.innerText = "Stop";
    } else {
        recognition.stop();
        button.innerText = "Speak";
    }

    clearVisibility();

    recognition.onresult = function (event) {
        // console.log(event.results[0][0].transcript);
        let wordSpoken = event.results[0][0].transcript + "";
        wordSpoken = wordSpoken.toLowerCase();

        if (wordSpoken = "help") {
            help();
        } else if (wordSpoken == "apple") {
            apple.style = "display: inline;";
        } else if (wordSpoken == "grapes" || wordSpoken == "grape") {
            grapes.style = "display: inline";
        } else if (wordSpoken == "orange") {
            orange.style = "display: inline";
        } else if (wordSpoken == "pear" || wordSpoken == "pair") {
            pear. style = "display: inline";
        } else if (wordSpoken == "watermelon") {
            watermelon.style = "display: inline";
        } else {
            unknown.style = "display: inline";
        }

        button.innerText = "Speak";
    }
});