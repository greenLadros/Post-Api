//init
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
//import routes
postRoute = require("./routes/posts")

//Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use("/posts", postRoute)

//
app.get('/', (request, response) => {
    response.send('we are home')
})

//Connect to DB
mongoose.connect(
process.env.DB_CONNECTION,
{ useNewUrlParser: true },
() => console.log("connected to database!"))

//start listening to server
app.listen('3000')