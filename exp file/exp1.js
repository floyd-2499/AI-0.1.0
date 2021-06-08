const voice2text = document.querySelector(".voice2text");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

let record = recorder.start();

$(document).ready(function () {
  setInterval(function () {
    let record = recorder.start();
    let audio = new Audio("beep.mp3");
    record;
    audio.play();
    audio.volume = 0.2;
  }, 6000);

  
  // Landing Page message
  const speech = new SpeechSynthesisUtterance();
  speech.text = "Boss, I'm Ready At your Service. Lets Crack some ideas today";
  speech.volume = 1;
  speech.rate = 0.9;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
});

// load.addEventListener("load", () => {
//   record;
// });

recorder.onresult = (e) => {
  console.log(e);

  const resultIndex = e.resultIndex;
  const transcript = e.results[resultIndex][0].transcript;
  const message = transcript;
  console.log(`${transcript}`);
  var element = document.getElementById("container");

  element.appendChild(addHumanText(transcript));

  botVoice(transcript);
};

// setTimeout(function () {
//   window.location.reload();
// }, 7000);  now not required

function addHumanText(text) {
  const chatContainer = document.createElement("div"); //creating html in js
  chatContainer.classList.add("chat-container");

  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");

  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);

  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");

  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");

  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);

  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
  const speech = new SpeechSynthesisUtterance();
  let dn = document.querySelector("#container");

  speech.text = "Not coded for this input sir ";

  if (message.includes("hi")) {
    speech.text = " Hey Boss,Chat-Bot activated. What are we going to do Sir?";
  }
  if (message.includes("hai")) {
    speech.text =
      " Hey Boss,Chat-Bot activated. What are we going to do today Sir?";
  }
  if (message.includes("display chat")) {
    dn.style.display = "block";
    speech.text = "Chat display is open";
  } else {
    dn.style.display = "none";
  }
  if (message.includes("close chat")) {
    dn.style.display = "none";
    speech.text = "Chat display closed";
  }
  if (message.includes("date")) {
    speech.text = `Today is ${date}th  ${month} and its ${day}.`;
  }

  if (message.includes(`my name is `)) {
    var myArr = message;
    let userName = myArr.split(" ");
    speech.text = `Hey ${userName[3]}`;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  // window.speechSynthesis.speak(speech);

  var element = document.getElementById("container");
  element.appendChild(addBotText(speech.text));
}







