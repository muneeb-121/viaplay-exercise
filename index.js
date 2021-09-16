const express = require("express")
const logger = require('morgan')
const dotenv = require('dotenv')

const trailerServiceRoute = require("./routes/TrailerService")

dotenv.config()
const app = express()
const port = process.env.port || 3000

app.use(logger('dev'))
app.use(express.json())

app.use('/trailers', trailerServiceRoute)
app.get('/*', (req, res) => res.status(404).json({ msg: "resource not found" }))

app.listen(port, () => {
    console.log(`Server Listening at PORT:${port}`)
})

module.exports = app
