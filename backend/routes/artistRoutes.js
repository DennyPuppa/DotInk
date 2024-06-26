const express = require('express');
const artist = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

//Model
const ArtistModel = require('../models/artist');

//Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY
})

const cloudStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'avatarArtist',
        format: async (req, file) => 'png',
        public_id: (req, file) => file.name
    }
})

const cloudUpload = multer({ storage: cloudStorage })

//Routes
artist.get('/', (req, res) => {
    res.json({
        message: "Hello Artist!"
    })
})

artist.get('/artists', async (req, res) => {
    const artists = await ArtistModel.find().populate('post').populate('event');
    res.status(200).json(artists);
})

artist.get('/artist/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const artist = await ArtistModel.findById(id).populate('post').populate('event');
        res.status(200).json(artist);
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }
})

artist.post('/artist/create', cloudUpload.single('avatarImg'), async (req, res, next) => {
    const newArtist = new ArtistModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        avatar: req.file.path,
        city: req.body.city,
        tattoostyle: req.body.tattoostyle
    })
    try {
        const dbArtist = await newArtist.save()
        res.status(201).json(dbArtist);
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }
})

artist.put('/artist/modify/:id', async (req, res, next) => {
    const id = req.params.id;
    const obj = req.body;
    try {
        const artistUpdate = await ArtistModel.findByIdAndUpdate(id, obj)
        res.status(200).json(artistUpdate);
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }
})

// artist.put('/artist/follow/:id', async (req, res, next) => {
//     const id = req.params.id;
//     const follower = req.body;
//     try {
//         const artistUpdate = await ArtistModel.findByIdAndUpdate(id, follower)
//         res.status(200).json(artistUpdate);
//     } catch (error) {
//         // res.status(500).json({ message: err.message });
//         next(error)
//     }
// })

artist.delete('/artist/delete/:id', async (req, res, next) => {

    const id = req.params.id;
    try {
        await ArtistModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'artist succes deleted' });
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }

})

module.exports = artist;