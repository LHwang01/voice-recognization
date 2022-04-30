const button = document.getElementById("button");
var recognition = new webkitSpeechRecognition();

function getVoice() {
    recognition.onresult = function (event) {
        console.log(event.results[0][0].transcript);
    }
}

button.addEventListener("click", () => {
    getVoice();

    if (button.innerText === "Speak") {
        recognition.start();
        getVoice();
        button.innerText = "Stop";
    } else {
        recognition.stop();
        getVoice();
        button.innerText = "Speak";
    }
});