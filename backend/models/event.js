const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artistId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artists'
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    city: {
        type: String,
        required: true
    }
}, {timestamps: true, strict: true})

const EventModel = mongoose.model('Event', EventSchema);
module.exports = EventModel;