const express = require('express')
const app = express()
const path = require('path')
const Rollbar = require("rollbar");


// include and initialize the rollbar library with your access token

const rollbar = new Rollbar({
    accessToken: '8a8fd14a053a4590b991db4b1d27e6fa',
    captureUncaught: true,
    captureUnhandledRejections: true
  });
  // record a generic message and send it to Rollbar
  rollbar.log("Just reloaded the heroku!");


app.use(express.json())
app.use(rollbar.errorHandler())

//GET ENDPOINTS
app.get(`/`, (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
//ROLLBAR REQS
app.get('/api/critical', (req,res) => {
    res.status(200).send(`Critical sent to rollbar`)
    rollbar.critical('rollbar critical sent')
})

app.get('/api/error', (req,res) => {
    res.status(200).send(`error sent to rollbar`)
    rollbar.error('rollbar error sent')
})

app.get('/api/info', (req,res) => {
    res.status(200).send(`info sent to rollbar`)
    rollbar.info('this should work for info')
})

app.get('/api/warning', (req,res) => {
    res.status(200).send(`warning sent to rollbar`)
    rollbar.warning('this is my warning')
})
//sends javascript and css to client--------------------------//
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.js'))
})
app.get('/styles.css', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/styles.css'))
})
//-----------------------------------------------------------//


//PUT ENDPOINTS

//POST ENDPOINTS

//DELETE ENDPOINTS

let port = process.env.PORT || 3005
app.listen(port, () => console.log(`Now listening on ${port}`))