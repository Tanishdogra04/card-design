const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connection established successfully'))
.catch(err => console.log('MongoDB connection error: ', err));

// Property Schema
const propertySchema = new mongoose.Schema({
    id: Number,
    name: String,
    developer: String,
    location: String,
    rera: String,
    price: Number,
    badge: String,
    category: String,
    type: String,
    configuration: String,
    area: String,
    segment: String,
    images: [String]
}, { timestamps: true });

const Property = mongoose.model('Property', propertySchema);

app.get('/api/properties', async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch properties', error: err.message });
    }
});

// Enquiry Schema
const enquirySchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String
}, { timestamps: true });

const Enquiry = mongoose.model('Enquiry', enquirySchema);

app.post('/api/enquiry', async (req, res) => {
    try {
        const newEnquiry = new Enquiry(req.body);
        await newEnquiry.save();
        res.status(201).json({ message: "Enquiry submitted successfully ✅" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

app.get('/', (req, res) => {
    res.send('Backend Server is Running.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});