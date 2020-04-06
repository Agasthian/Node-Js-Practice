const express = require('express');
const path = require('path');

const app = express();
const publicpathDir = path.join(__dirname, '../public');
console.log(publicpathDir);

app.use(express.static(publicpathDir));

app.get('/weather', (req, res) => {
  res.send({
    forecast: '37',
    loaction: 'Chennai',
  });
});

app.listen(3000, () => {
  console.log('Server is up on post 3000');
});
