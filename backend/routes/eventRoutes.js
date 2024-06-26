const express = require('express');
const event = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

//Model
const EventModel = require('../models/event');
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
        folder: 'eventArtistImg',
        format: async (req, file) => 'png',
        public_id: (req, file) => file.name
    }
})

const cloudUpload = multer({ storage: cloudStorage })

//Routes
event.get('/', (req, res) => {
    res.json({
        message: "Event Artist!"
    })
})

event.get('/event', async (req, res) => {
    const event = await EventModel.find().populate('artistId');
    res.status(200).json(event);
})

event.get('/event/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const event = await EventModel.findById(id).populate('artistId')
        res.status(200).json(event);
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }
})

event.post('/artist/:id/event/create', cloudUpload.single('eventImg'), async (req, res, next) => {
    const id = req.params.id;
    const newEvent = new EventModel({
        title: req.body.title,
        artistId: id,
        image: req.body.image,
        date: req.body.date
    })
    try {
        const dbEvent = await newEvent.save();
        const artista = await ArtistModel.findById(id);
        artista.event.push(dbEvent);
        await artista.save();
        console.log(artista);
        res.status(201).json(dbEvent);
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }
})

event.put('/event/modify/:id', async (req, res, next) => {
    const id = req.params.id;
    const obj = req.body;
    try {
        const eventUpdate = await EventModel.findByIdAndUpdate(id, obj)
        res.status(200).json(eventUpdate);
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }
})

event.delete('/event/delete/:id', async (req, res, next) => {

    const id = req.params.id;
    try {
        await EventModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'event succes deleted' });
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }

})

module.exports = event;