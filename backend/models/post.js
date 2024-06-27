const mongoose = require('mongoose');

const ArtistModel = require('./artist');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    artistId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artists'
    },
    image: {
        type: String,
        required: true,
    },
    tattoostyle: {
        type: String,
        required: true
    },
    postLike: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist'
    }]
}, {timestamps: true, strict: true})

const PostLikeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artists'
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
}, {timestamps: true, strict: true})

const PostModel = mongoose.model('Post', PostSchema);
const PostLike = mongoose.model('Like', PostLikeSchema)
module.exports = { PostModel, PostLike };