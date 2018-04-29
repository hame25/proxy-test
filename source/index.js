const express = require('express');
const cookieParser = require('cookie-parser');

const app = new express();

app.use(cookieParser());

app.get('/', (req, res) => {
  res.redirect(302, 'http://www.mytarget.com/returnUrl');
});

app.listen(1984, () => {
  console.log('source app is running...');
});