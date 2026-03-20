const mongoose = require('mongoose');
require('dotenv').config();

const propertySchema = new mongoose.Schema({
    id: Number, name: String, developer: String, location: String, rera: String,
    price: Number, badge: String, category: String, type: String,
    configuration: String, area: String, segment: String, images: [String]
}, { timestamps: true });

const Property = mongoose.model('Property', propertySchema);

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    console.log('Connected to MongoDB');
    const count = await Property.countDocuments();
    if (count === 0) {
        console.log('Database is empty. Seeding...');
        const fs = require('fs');
        const path = require('path');
        const dataPath = path.join(__dirname, '../frontend/src/data/properties.json');
        
        if (fs.existsSync(dataPath)) {
            const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
            await Property.insertMany(data);
            console.log('Successfully seeded database with properties from JSON.');
        } else {
            console.log('Could not find properties.json to seed data.');
        }
    } else {
        console.log(`Database already has ${count} properties.`);
    }
    process.exit(0);
})
.catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});
