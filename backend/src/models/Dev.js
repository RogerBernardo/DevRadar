const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const PointSchema = require('./Utils/PointSchema');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere',
    }
});

module.exports = mongoose.model('Dev', DevSchema);