const express = require('express');
const setCookie = require('set-cookie');

const app = new express();

app.get('/', (req, res) => {

  setCookie('t', 'xyz', {
    domain: 'localhost',
    res
  });

  res.send('<a href="http://localhost:1983">Hello world</a>');
});

app.get('/returnUrl', (req, res) => {
  res.send('return url');
});

app.listen(1982, () => {
  console.log('basic app is running...');
});