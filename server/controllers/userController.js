const bcrypt = require('bcrypt')
const userModel = require("../models/userModel")
const jwt = require('jsonwebtoken')

//registration
const registration = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body
        const profileImage = req.file
        if (!profileImage) {
            return res.status(400).json({ message: 'No file uploaded' })
        }
        const profileImagePath = profileImage.path
        const existUser = await userModel.findOne({ email })
        if (existUser) {
            return res.status(409).json({ message: 'User already registered' })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new userModel({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            profileImagePath
        })
        await newUser.save()
        return res.status(201).json({ message: 'Registartion successfully', user: newUser })
    } catch (error) {
        return res.status(500).json({ message: 'Registration failed', error: error.message })
    }
}

//login
const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const userExist = await userModel.findOne({ email })
        if (!userExist) {
            return res.status(409).json({ message: 'User does not exist' })
        }
        const isMatch = bcrypt.compare(password, userExist.password)
        if (!isMatch) { return res.status(409).json({ message: 'Invalid credentials' }) }
        const token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET)
        return res.status(200).json({ messaeg: 'Login successfully', user: userExist, token })
    } catch (error) {
        return res.status(500).json({ message: 'Login failed', error: error.message })
    }
}
module.exports = { registration, login }