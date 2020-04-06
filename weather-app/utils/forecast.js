const request = require('request');

const forecast = (lat, long, callback) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=93316cc6461339ec677140363daa8d7a&units=metric`;

  request({ url, json: true }, (error, response) => {
    const { body } = response;
    if (error) {
      callback('Cannot connect to weather services', undefined);
    } else if (body.message) {
      callback('Unable to Find location', undefined);
    } else {
      callback(
        undefined,
        `${body.weather[0].description}.  Its currently ${body.main.temp} degrees out. The humudity is ${body.main.humidity}%`
      );
    }
  });
};

module.exports = forecast;
