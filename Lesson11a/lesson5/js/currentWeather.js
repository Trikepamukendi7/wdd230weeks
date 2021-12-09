const apiURL1 = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f16dba3bba1bb6b5349c0a755835578e';
fetch(apiURL1)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = jsObject.wind.speed.toFixed(1);
    document.getElementById('windchillapi').textContent = jsObject.main.feels_like.toFixed(0);
    document.getElementById('currently').textContent = jsObject.weather[0].description;

});