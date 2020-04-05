const request = require('request');

const geoCoding = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoiYWdhc3RoaWFuIiwiYSI6ImNrOGs4NjA0bDAxeTEzZXM3MW41YTNjcWkifQ.Gjnmrtmu30QImROlBH_GFg&limit=1';

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to mapping APi', undefined);
    } else if (response.body.features.length === 0) {
      callback(
        'Unable to find location. Please enter the correct location',
        undefined
      );
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCoding;
