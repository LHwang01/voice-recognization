const apple = document.getElementById("apple");
const grapes = document.getElementById("grapes");
const orange = document.getElementById("orange");
const pear = document.getElementById("pear");
const watermelon = document.getElementById("watermelon");

const button = document.getElementById("button");
var recognition = new webkitSpeechRecognition();

function clearVisibility() {
    apple.style = "display: none;";
    grapes.style = "display: none;";
    orange.style = "display: none;";
    pear.style = "display: none;";
    watermelon.style = "display: none;";
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

        if (wordSpoken == "apple") {
            apple.style = "display: inline;";
            console.log("apple");
        } else if (wordSpoken == "grapes" || wordSpoken == "grape") {
            grapes.style = "display: inline";
            console.log("grapes");
        } else if (wordSpoken == "orange") {
            orange.style = "display: inline";
            console.log("orange");
        } else if (wordSpoken == "pear" || wordSpoken == "pair") {
            pear. style = "display: inline";
            console.log("pear");
        } else if (wordSpoken == "watermelon") {
            watermelon.style = "display: inline";
            console.log("watermelon")
        } else {
            console.log("unknown");
        }
    }
});