const express = require('express')
const app = express()
const connectDB = require('./DB/connect')

app.use(express.json())


const port = 3000 

const startServer = async() => {
    try {
        await connectDB()
        console.log('Connected to MongoDB using mongoose !')
        app.listen(port,()=>{
            console.log(`Server is listenting on port ${port}...`)
        })
    } catch (err) {
        console.log(err)
    }
}

startServer()