const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/UserModel')
const { signup, login } = require('./AuthController');


const mongoUri = "mongodb+srv://yair:Aa123456@cluster0.p6pzo.mongodb.net/tic-tac-toeDB?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUri);
const router = new express.Router();

router.post('/signup', signup);
router.post('/login', login);



module.exports = router;