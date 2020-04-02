const request = require('request');

const url =
  'http://api.openweathermap.org/data/2.5/weather?q=chennai&appid=93316cc6461339ec677140363daa8d7a';

request({ url: url, json: true }, (error, response) => {
  console.log(response.body);
});
