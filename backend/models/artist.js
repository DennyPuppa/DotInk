const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { PostModel } = require('./post')

const ArtistSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false,
        default: 'https://picsum.photos/100'
    },
    city: {
        type: String,
        required: true
    },
    tattoostyle: [{
        type: String,
        required: true
    }],
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    event: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }],
    follows: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artists'
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artists'
    }]
}, {timestamps: true, strict: true})

ArtistSchema.pre('save', async function(next){
    const password = this.password;
    if(password){
        try {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(this.password, salt);
            this.password = hashedPassword;
            next();
        } catch (error) {
            next(error)
        }
    }
})

const ArtistModel = mongoose.model('Artists', ArtistSchema);
module.exports = ArtistModel;