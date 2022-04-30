const button = document.getElementById("button");

function getVoice() {
    var recognition = new webkitSpeechRecognition();
    recognition.onresult = function (event) {
        console.log(event.results[0][0].transcript);
    }

    recognition.start();
}

button.addEventListener("click", ()=>{

    if(button.innerText === "Speak"){
        button.innerText = "Stop";
    }else{
        button.innerText= "Speak";
    }
});