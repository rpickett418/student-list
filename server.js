const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')
let rollbar = new Rollbar({
    accessToken: '1e99830635c14048bf605dd9fc2bd2f8',
    captureUncaught: true,
    captureUnhandledRejections: true

})

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

const port = process.env.PORT || 4444
// I had app.listen(4444 first)
app.listen(port, () => console.log('Right Money'))