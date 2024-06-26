const express = require('express');
const login = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//model
const UserModel = require('../models/user');

login.post('/login/user', async (req, res) => {
    const user = await UserModel.findOne({email: req.body.email});
    if(!user){
        return res.status(404).send({
            message: 'Utente non esistente'
        })
    }
    try {
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(403).send('Username o Password non valida');
        }
        const token = jwt.sign({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            username: user.username,
            city: user.city,
            tattoostyle: user.tattoostyle,
            avatar: user.avatar
        },
            process.env.JWT_SECRET_KEY,
            {
            expiresIn: '30m'
        })
        res.status(200).json(token);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

module.exports = login;