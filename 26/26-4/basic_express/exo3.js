const express = require('express');

const app = express();

app.post('/', function (req, res) {
  console.log('request received', req.query);
  res.send({ message: 'Hello', name: req.query.name });
});

app.listen(3000);
