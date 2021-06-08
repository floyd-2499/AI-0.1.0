

navigator.getBattery().then(function(battery){

    let myVar = setInterval(myTimer, 10000);
    const speech = new SpeechSynthesisUtterance();
    function myTimer() {
   


        const level = battery.level;
        const status = level * 100 + "%";
        console.log(status);
    
        let lvl = (Math.round(level * 100) ).toFixed(0);
        speech.text = ` `;
        if (lvl <=20) {
            speech.text = `Boss need to charge the battery `;
          }
    
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);

      }

})