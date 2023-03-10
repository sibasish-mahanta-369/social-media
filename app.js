const express = require('express')
const app = express()
const connectDB = require('./DB/connect')
const router = require('./routes/users')
require('dotenv').config()

app.use(express.json())
app.use('/users',router)

const port = 3000 

const startServer = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('Connected to MongoDB using mongoose !')
        app.listen(port,()=>{
            console.log(`Server is listenting on port ${port}...`)
        })
    } catch (err) {
        console.log(err)
    }
}

startServer()