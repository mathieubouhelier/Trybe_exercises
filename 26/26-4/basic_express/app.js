const express = require('express');

const app = express();

app.get('/', (req,res) =>{
  res.send("were are here")
})

app.listen(3000);
