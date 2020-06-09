const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocoding = require('./utils/geocoding');
const forecast = require('./utils/forecast');

const app = express();

// Define path  for express config
const publicpathDir = path.join(__dirname, '../public');
const viewsPaths = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebar engine and  views location
app.set('view engine', 'hbs');
app.set('views', viewsPaths);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicpathDir));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Agasthian',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Agasthian',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help / FAQs',
    name: 'Agasthian',
    message: 'FAQs , Read the questions once for commonly raised queries',
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Agasthian',
    error: 'Help article not found',
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'Enter the address',
    });
  } else {
    geocoding(req.query.address, (error, response = {}) => {
      const { latitude, longitude, location } = response;

      if (error) {
        return res.send({
          error,
        });
      }

      forecast(latitude, longitude, (error, data) => {
        if (error) {
          return res.send({
            error,
          });
        }

        res.send({
          forecast: data,
          location: location,
          address: req.query.address,
        });
      });
    });
  }
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Agasthian',
    error: 'Page not found',
  });
});

app.listen(3000, () => {
  console.log('Server is up on post 3000');
});
