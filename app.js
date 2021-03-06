// 'use strict';

const express = require('express') //require express
const app = express() //invote express to have access to methods
const port = process.env.PORT || 3000 //set port number
const router = require('./routes/index')

app.use('/', router);
//catch all 404 route
app.use((req,res,next) => {
  res.status(404).json({error: {message: "404 Not FOund"}})
})


// how your server listens for requests on a specific port number
//app.listen()
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});
