const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())


app.get(`/`, (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})



let port = process.env.PORT || 3005
app.listen(port, () => console.log(`Now listening on ${port}`))