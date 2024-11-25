const express = require('express')
const { registration } = require('../controllers/userController')
const upload = require('../middleware/multer')

const authRoute = express.Router()

authRoute.post('/register', upload.single('profileImage'), registration)


module.exports = authRoute