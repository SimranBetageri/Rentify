// models/Property.js
const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    place: { type: String, required: true },
    area: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    hospitalsNearby: { type: String, required: true },
    collegesNearby: { type: String, required: true },
    likes: { type: Number, default: 0 },
    interestedBuyers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Property', PropertySchema);
