const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: { type: String, require },
    lastName: { type: String, require },
    email: { type: String, require },
    password: { type: String, require },
    profileImagePath: { type: String, default: '' },
    tripList: { type: Array, default: [] },
    wishList: { type: Array, default: [] },
    propertyList: { type: Array, default: [] },
    reservationList: { type: Array, default: [] },
}, { timestamps: true })

const userModel = mongoose.models.user || mongoose.model('user', userSchema)

module.exports = userModel