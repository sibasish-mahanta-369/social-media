const express = require('express')
const app = express()

const getSingleUser = (req,res) =>{
    res.send('Single User')
}

const getSingleUsersfollowers = (req,res) =>{
    res.send('Single User Followers')
}

const getSingleUsersfollowing = (req,res) =>{
    res.send('Single User Followerings')
}

module.exports = {getSingleUser,getSingleUsersfollowers,getSingleUsersfollowing}