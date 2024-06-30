const express = require('express');
const login = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//model
const ArtistModel = require('../models/artist');

login.post('/login/artist', async (req, res) => {
    const artist = await ArtistModel.findOne({email: req.body.email});
    if(!artist){
        return res.status(404).send({
            message: 'Utente non esistente'
        })
    }
    try {
        const validPassword = await bcrypt.compare(req.body.password, artist.password);
        console.log(artist.password);
        console.log(req.body.password);
        if (!validPassword) {
            return res.status(403).send('Username o Password non valida');
        }
        const token = jwt.sign({
            _id: artist._id,
            firstname: artist.firstname,
            lastname: artist.lastname,
            email: artist.email,
            username: artist.username,
            city: artist.city,
            tattoostyle: artist.tattoostyle,
            avatar: artist.avatar,
            post: artist.post,
            event: artist.event,
            follows: artist.follows
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