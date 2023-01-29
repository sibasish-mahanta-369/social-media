const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://Sibasish:1234@cluster0.wgevnrf.mongodb.net/social-media?retryWrites=true&w=majority'


mongoose.set('strictQuery', true)

const connectDB = (url) =>{
    mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true})
}

module.exports = connectDB