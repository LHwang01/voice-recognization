function getVoice() {
    var recognition = new webkitSpeechRecognition();
    recognition.onresult = function (event) {
        console.log(event.results[0][0].transcript);
    }

    recognition.start();
}