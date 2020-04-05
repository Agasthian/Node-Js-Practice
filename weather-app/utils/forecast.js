const request = require('request');

const forecast = (lat, long, callback) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=93316cc6461339ec677140363daa8d7a&units=metric`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Cannot connect to weather services', undefined);
    } else if (response.body.message) {
      callback('Unable to Find location', undefined);
    } else {
      callback(
        undefined,
        `${response.body.weather[0].description}.  Its currently ${response.body.main.temp} degrees out. The humudity is ${response.body.main.humidity}%`
      );
    }
  });
};

module.exports = forecast;
