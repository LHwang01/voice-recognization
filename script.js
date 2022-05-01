const apple = document.getElementById("apple");
const grapes = document.getElementById("grapes");
const orange = document.getElementById("orange");
const pear = document.getElementById("pear");
const watermelon = document.getElementById("watermelon");
const unknown = document.getElementById("unknown");

const button = document.getElementById("button");
var recognition = new webkitSpeechRecognition();

let speech = new SpeechSynthesisUtterance();
speech.lang = "en";

function clearVisibility() {
    apple.style = "display: none;";
    grapes.style = "display: none;";
    orange.style = "display: none;";
    pear.style = "display: none;";
    watermelon.style = "display: none;";
    unknown.style = "display: none;"
}

function help() {
    speech.text = "Say the name of one of the objects on the screen for it to appear. Say about to hear more about the program";
    speechSynthesis.speak(speech);
}

function about() {
    speech.text = "Lawrence Hwang. Copyright 2022.";
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
        let wordSpoken = event.results[0][0].transcript + "";
        wordSpoken = wordSpoken.toLowerCase();

        // console.log(wordSpoken);

        if (wordSpoken == "help") {
            help();
        } else if (wordSpoken == "about") {
            about();
        } else if (wordSpoken == "apple") {
            apple.style = "display: inline;";
        } else if (wordSpoken == "grapes" || wordSpoken == "grape") {
            grapes.style = "display: inline";
        } else if (wordSpoken == "orange") {
            orange.style = "display: inline";
        } else if (wordSpoken == "pear" || wordSpoken == "pair") {
            pear.style = "display: inline";
        } else if (wordSpoken == "watermelon") {
            watermelon.style = "display: inline";
        } else {
            unknown.style = "display: inline";
        }

        button.innerText = "Speak";
    }
});