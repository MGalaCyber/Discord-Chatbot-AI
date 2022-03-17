const mongoose = require('mongoose');

let GuildSchema = new mongoose.Schema({
    guildId: {
        type: String,
        required: true
    },

    blacklisted: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('blacklist-server', GuildSchema);