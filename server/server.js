const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()

const app = express()

//configuration 
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 5000

//routes
app.get('/', (req, res) => { console.log("it is working") })

app.listen(port, () => console.log('server is running at port ' + port))