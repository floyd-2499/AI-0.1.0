// Weather
function getWeather() {
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let location = document.getElementById("location");
  
    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "f146799a557e8ab658304c1b30cc3cfd";
  
    location.innerHTML = "Locating...";
  
    navigator.geolocation.getCurrentPosition(success, error);
  
    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
  
      let url =
        api +
        "?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&appid=" +
        apiKey +
        "&units=imperial";
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
  
          
          let myVar = setInterval(myTimer, 1000);
          function myTimer() {
            let temp = data.main.temp;
            let fToCe = (temp - 32) / 1.8;
            let degc = fToCe.toFixed(2);
            temperature.innerHTML = degc + " °c" ;
            location.innerHTML = data.name+ "," +  data.sys.country ;
            description.innerHTML = data.weather[0].main;
  
  
            if (description.innerHTML === `Clouds`){
              document.querySelector("#img1").style.display = "block";  
              console.log("Weather reload confirmed")      
            }
            if (description.innerHTML === `Rain`){
              document.querySelector("#img4").style.display = "block";  
              console.log("Weather reload confirmed")      
            }
          }
        });
    }
    function error() {
      location.innerHTML = "Unable to retrieve your location. Please Allow to get Location";
    }
  }
  getWeather();
  