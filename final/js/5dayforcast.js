const apiURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=f16dba3bba1bb6b5349c0a755835578e";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const imagesrc1 =
      "http://openweathermap.org/img/wn/" +
      jsObject.list[7].weather[0].icon +
      "@2x.png";
    const imagesrc2 =
      "http://openweathermap.org/img/wn/" +
      jsObject.list[15].weather[0].icon +
      "@2x.png";
    const imagesrc3 =
      "http://openweathermap.org/img/wn/" +
      jsObject.list[23].weather[0].icon +
      "@2x.png";
    const imagesrc4 =
      "http://openweathermap.org/img/wn/" +
      jsObject.list[31].weather[0].icon +
      "@2x.png";
    const imagesrc5 =
      "http://openweathermap.org/img/wn/" +
      jsObject.list[39].weather[0].icon +
      "@2x.png";

      document.getElementById("icon1").setAttribute("src", imagesrc1);
      document.getElementById("icon2").setAttribute("src", imagesrc2);
    document.getElementById("icon3").setAttribute("src", imagesrc3);
    document.getElementById("icon4").setAttribute("src", imagesrc4);
    document.getElementById("icon5").setAttribute("src", imagesrc5);

    const noon = jsObject.list.filter((x) => x.dt_txt.includes("18:00:00"));
    console.log(noon);

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = 0;
    noon.forEach((forecast) => {
      let thedate = new Date(forecast.dt_txt);
      document.querySelector(`#day${day + 1}`).textContent =
        weekdays[thedate.getDay()];
      document.querySelector(`#for${day + 1}`).textContent =
        forecast.main.temp.toFixed(0);

      day++;
    });
  });
