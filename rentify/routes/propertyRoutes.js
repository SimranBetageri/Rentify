// routes/propertyRoutes.js
const express = require('express');
const Property = require('../models/Property');
const User = require('../models/User');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Post Property
router.post('/', protect, async (req, res) => {
    const { place, area, bedrooms, bathrooms, hospitalsNearby, collegesNearby } = req.body;
    try {
        const property = new Property({
            seller: req.user._id,
            place,
            area,
            bedrooms,
            bathrooms,
            hospitalsNearby,
            collegesNearby,
        });
        await property.save();
        res.status(201).json(property);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Properties
router.get('/', async (req, res) => {
    try {
        const properties = await Property.find().populate('seller', 'firstName lastName email phoneNumber');
        res.json(properties);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Express Interest
router.post('/:id/interested', protect, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        property.interestedBuyers.push(req.user._id);
        await property.save();

        const seller = await User.findById(property.seller);

        // Send email to the seller
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: seller.email,
            subject: 'New Interest in Your Property',
            text: `A buyer is interested in your property. Buyer's contact details: ${req.user.email}, ${req.user.phoneNumber}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.json({ message: 'Interest expressed successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
