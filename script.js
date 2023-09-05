const msgEl = document.getElementById("msg");
const randomNum = getRandomNumber();
function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new window.SpeechRecognition();
//start recognition
recognition.start();

recognition.addEventListener("result", onSpeak);
function onSpeak(e) {
  const msg = e.results[0][0].transcript;
  // writeMessage(msg);
  // checkNumber(msg)
}
