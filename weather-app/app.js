const geocoding = require('./utils/geocoding');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log('Please enter a address');
} else {
  geocoding(address, (error, response) => {
    if (error) {
      return console.log(error);
    }

    forecast(response.latitude, response.longitude, (error, data) => {
      if (error) {
        return console.log(error);
      }
      console.log(response.location);
      console.log(data);
    });
  });
}
