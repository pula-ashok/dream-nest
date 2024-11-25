const mongoose = require('mongoose')

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log('mongodb database connected'))
    mongoose.connect(process.env.MONGO_URI)
}
module.exports = connectDB