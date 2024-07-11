const express = require('express');
const post = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

//Model
const { PostModel } = require('../models/post');
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
        folder: 'postArtistImg',
        format: async (req, file) => 'png',
        public_id: (req, file) => file.name
    }
})

const cloudUpload = multer({ storage: cloudStorage })

//Routes
post.get('/', (req, res) => {
    res.json({
        message: "Post Artist!"
    })
})

post.get('/post', async (req, res) => {
    const post = await PostModel.find().populate('artistId');
    res.status(200).json(post);
})

post.get('/post/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const post = await PostModel.findById(id).populate('artistId');
        res.status(200).json(post);
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }
})

post.post('/artist/:id/post/create', cloudUpload.single('postImg'), async (req, res, next) => {
    const id = req.params.id;
    const newPost = new PostModel({
        title: req.body.title,
        description: req.body.description,
        artistId: id,
        image: req.file.path,
        tattoostyle: req.body.tattoostyle
    })
    try {
        const dbPost = await newPost.save();
        const artist = await ArtistModel.findById(id);
        artist.post.push(dbPost);
        await artist.save();
        res.status(201).json(dbPost);
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }
})

post.put('/post/modify/:id', async (req, res, next) => {
    const id = req.params.id;
    const obj = req.body;
    try {
        const postUpdate = await PostModel.findByIdAndUpdate(id, obj)
        res.status(200).json(postUpdate);
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }
})

post.delete('/post/delete/:id', async (req, res, next) => {

    const id = req.params.id;
    try {
        await PostModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'post succes deleted' });
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }

})

post.post('/like/:id/:me/', async (req, res, next) => {
    const me = req.params.me;
    const id = req.params.id;
    console.log(me);
    console.log(id);
    try {
        const myArtist = await ArtistModel.findById(me)
        const post = await PostModel.findById(id)
        console.log(post);
        post.postLike.push(myArtist)
        await post.save()
        res.status(201).json({ message: 'Like Post' });

    } catch (error) {
        next(error)
    }
})

module.exports = post;