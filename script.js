const button = document.getElementById("button");
var recognition = new webkitSpeechRecognition();

button.addEventListener("click", () => {
    if (button.innerText === "Speak") {
        recognition.start();
        button.innerText = "Stop";
    } else {
        recognition.stop();
        button.innerText = "Speak";
    }

    recognition.onresult = function (event) {
        // console.log(event.results[0][0].transcript);
        let wordSpoken = event.results[0][0].transcript + "";
        wordSpoken = wordSpoken.toLowerCase();

        if (wordSpoken == "apple") {
            console.log("apple");
        } else if (wordSpoken == "grapes") {
            console.log("grapes");
        } else if (wordSpoken == "Orange") {
            console.log("orange");
        } else if (wordSpoken == "pear" || wordSpoken == "pair") {
            console.log("pear");
        } else if (wordSpoken == "watermelon") {
            console.log("watermelon")
        } else {
            console.log("unknown");
        }
    }
});