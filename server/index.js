const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())


app.get(`/`, (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})





// include and initialize the rollbar library with your access token
const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: '8a8fd14a053a4590b991db4b1d27e6fa',
  captureUncaught: true,
  captureUnhandledRejections: true
});
// record a generic message and send it to Rollbar
rollbar.log("Hello world!");



let port = process.env.PORT || 3005
app.listen(port, () => console.log(`Now listening on ${port}`))