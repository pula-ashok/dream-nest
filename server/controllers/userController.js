const bcrypt = require('bcrypt')
const userModel = require("../models/userModel")

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
        return res.status(200).json({ message: 'Registartion successfully', user: newUser })
    } catch (error) {
        return res.status(500).json({ message: 'Registration failed', error: error.message })
    }
}

module.exports = { registration }