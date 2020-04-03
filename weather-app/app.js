const request = require('request');

const url =
  'http://api.openweathermap.org/data/2.5/weather?lat=34.05&lon=-118.24&appid=93316cc6461339ec677140363daa8d7a&units=metric';

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Cannot connect to weather services');
  } else if (response.body.message) {
    console.log('Unable to Find location');
  } else {
    console.log(
      `${response.body.weather[0].description}.  Its currently ${response.body.main.temp} degrees out. The humudity is ${response.body.main.humidity}%`
    );
  }
});

const loactionUrl =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWdhc3RoaWFuIiwiYSI6ImNrOGs4NjA0bDAxeTEzZXM3MW41YTNjcWkifQ.Gjnmrtmu30QImROlBH_GFg&limit=1';

request({ url: loactionUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to mapping APi');
  } else if (response.body.features.length === 0) {
    console.log('Please enter the correct location');
  } else {
    console.log(
      ` Latitude : ${response.body.features[0].center[1]}, Longitude : ${response.body.features[0].center[0]}`
    );
  }
});
