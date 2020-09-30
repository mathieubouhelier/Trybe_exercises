const express = require('express');

const app = express();

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

app.post('/', function (req, res) {
  console.log('request received', req.query);
  res.send({ message: 'Hello', name: req.query.name });
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(3000);
