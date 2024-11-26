const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const authRoute = require('./routes/authRoute')
const dotenv = require('dotenv').config()

const app = express()

//configuration 
app.use(express.json())
app.use(cors())
app.use(express.static("public"));
const port = process.env.PORT || 5000

//routes
app.get('/', (req, res) => { console.log("it is working") })
app.use('/api/auth', authRoute)

connectDB()
app.listen(port, () => console.log('server is running at port ' + port))