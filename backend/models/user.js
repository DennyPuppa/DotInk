const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
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
    }]
}, {timestamps: true, strict: true})

UserSchema.pre('save', async function(next){
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

const UserModel = mongoose.model('Users', UserSchema);
module.exports = UserModel;