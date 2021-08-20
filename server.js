const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')
let rollbar = new Rollbar({
    accessToken: 'e4b0f33507bd40adae7119cf5de989c9',
    captureUncaught: true,
    captureUnhandledRejections: true
})

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served sucessfully')
})

const port = process.env.PORT || 4444;
// I had app.listen(4444 first)
app.listen(port, () => console.log(`Right Money: ${port}`));