const geocoding = require('./utils/geocoding');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log('Please enter a address');
} else {
  geocoding(address, (error, response) => {
    const { latitude, longitude, location } = response;

    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, data) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(data);
    });
  });
}
