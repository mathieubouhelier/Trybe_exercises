const express = require('express');
const router = express.Router();

// app.use('/posts', () => {
//   console.log('midleware posts is running');
// }); 


router.get('/', (req, res) => {
  res.send('here is posts');
});

module.exports = router;
