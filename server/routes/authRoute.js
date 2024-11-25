const express = require('express')
const { registration, login } = require('../controllers/userController')
const upload = require('../middleware/multer')

const authRoute = express.Router()

authRoute.post('/register', upload.single('profileImage'), registration)
authRoute.post('/login', login)


module.exports = authRoute