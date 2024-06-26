const express = require('express');
const user = express.Router();

//Model
const UserModel = require('../models/user');

user.get('/', (req, res) => {
    res.json({
        message: "Hello User!"
    })
})

user.get('/users', async (req, res) => {
    const users = await UserModel.find().populate({ path: 'post' });
    res.status(200).json(users);
})

user.get('/users/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const user = await UserModel.findById(id)
        res.status(200).json(user);
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }
})

user.post('/user/create', async (req, res, next) => {
    const newUser = new UserModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar,
        city: req.body.city,
        tattoostyle: req.body.tattoostyle,
    })
    try {
        const dbUser = await newUser.save();
        res.status(201).json(dbUser);
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }
})

user.put('/user/modify/:id', async (req, res, next) => {
    const id = req.params.id;
    const obj = req.body;
    try {
        const userUpdate = await UserModel.findByIdAndUpdate(id, obj)
        res.status(200).json(userUpdate);
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }
})

user.delete('/user/delete/:id', async (req, res, next) => {

    const id = req.params.id;
    try {
        await UserModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'user succes deleted' });
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }

})

module.exports = user;