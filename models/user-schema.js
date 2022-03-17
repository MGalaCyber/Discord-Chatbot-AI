const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },

    blacklisted: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('blacklist-user', UserSchema);