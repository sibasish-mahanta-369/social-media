const express = require('express')
const app = express()
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const createNewUser = async (req, res) => {
    try {
      const { username, password } = req.body;
      const existingUser = await User.findOne({username: username});
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new User({
        username: username,
        password: hashedPassword
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}


const getSingleUser = async (req,res) =>{
    try {
      const user = await User.findOne({ username: req.params.username });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}
  

const getSingleUsersfollowers = (req,res) =>{
    res.send('Single User Followers')
}

const getSingleUsersfollowing = (req,res) =>{
    res.send('Single User Followerings')
}

const followUser = (req, res) => {
    res.send('Follow a user')
}

const unFollowUser = (req, res) => {
    res.send('Unfollow a user')
}

module.exports = {createNewUser,getSingleUser,getSingleUsersfollowers,getSingleUsersfollowing,followUser,unFollowUser}
