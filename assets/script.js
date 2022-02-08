let weather = {
  apiKey: "c6f75f70e9cedcb5e23c09e3133854b7",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + 
      city + 
      "&limit=1&appid=" + 
      this.apiKey
      )
    .then((response) => response.json())
      .then((data) => this.displayWeather(data))
  },
  displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed)
    document.querySelector("#cityName").innerText = "Weather in " + name
    document.querySelector("#currentTemp").innerText = "Temperature: " + temp + "°F"
    document.querySelector("#icon").src = "http://openweathermap.org/img/wn/" + icon + ".png"
    document.querySelector("#currentWind").innerText = "Current Wind Speed: " + speed + " mp/h"
    document.querySelector("#currentHumidity").innerText = "Humidity: " + humidity
  }
}
// orlando lat and lon
// lat: 28.5421109,
// lon: -81.3790304,