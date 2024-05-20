// routes/properties.js
const express = require('express');
const Property = require('../models/Property');
const router = express.Router();

// Middleware to verify token
const verifyToken = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token is not valid' });
    }
};

// Post property
router.post('/', verifyToken, async (req, res) => {
    const { place, area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges } = req.body;
    try {
        const property = new Property({
            place,
            area,
            bedrooms,
            bathrooms,
            nearbyHospitals,
            nearbyColleges,
            seller: req.user.id,
        });
        await property.save();
        res.status(201).json(property);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all properties
router.get('/', async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get properties by seller
router.get('/seller', verifyToken, async (req, res) => {
    try {
        const properties = await Property.find({ seller: req.user.id });
        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update property
router.put('/:id', verifyToken, async (req, res) => {
    const { id } = req.params;
    try {
        const property = await Property.findById(id);
        if (!property) return res.status(404).json({ message: 'Property not found' });

        if (property.seller.toString() !== req.user.id) return res.status(401).json({ message: 'User not authorized' });

        Object.assign(property, req.body);
        await property.save();
        res.json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete property
router.delete('/:id', verifyToken, async (req, res) => {
    const { id } = req.params;
    try {
        const property = await Property.findById(id);
        if (!property) return res.status(404).json({ message: 'Property not found' });

        if (property.seller.toString() !== req.user.id) return res.status(401).json({ message: 'User not authorized' });

        await property.remove();
        res.json({ message: 'Property removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
