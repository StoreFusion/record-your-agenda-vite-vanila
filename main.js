import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

let recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.maxAlternatives = 1;

recognition.onresult = (event) => {
    const speech = event.results[0][0].transcript;
    console.log(speech)
    document.getElementById("theRecordedText").innerHTML = speech;
}

recognition.onspeechend = function() {
    console.log("this was said: cool placeholder code to understand more" + finalSpeechResults);
  }
  
recognition.onerror = function(event) {
    diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
  }

  
// document.body.onclick = () => {
//     recognition.start();
//     // console.log(window.document.body);
//     console.log("speech recognition started");
//   }

startBtn.onclick = () => {
  recognition.start();
  // const speech = event.results[0][0].transcript;
  document.getElementById("intimation").innerHTML = "your speech is now being recorded";
  console.log("speech recognition has started");
}

recognition.addEventListener("result", (event) => {
  const resultsToBePrinted = event.results[0][0].transcript;
  diagnostic.textContent = `Results received: ${event.results[0][0].transcript}.`;
  document.getElementById("recordedText").innerHTML = resultsToBePrinted;
  // bg.style.backgroundColor = resultsToBePrinted;
});


endBtn.onclick = () => {
    recognition.abort();
    console.log("Speech recognition aborted.");
    document.getElementById("intimation").innerHTML = "Speech recognition aborted";
    };

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
