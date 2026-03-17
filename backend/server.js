require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch(err => console.log(err));

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Schema
const enquirySchema = new mongoose.Schema({
  name: String,
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Enquiry = mongoose.model("Enquiry", enquirySchema);

// API
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.post("/api/enquiry", async (req, res) => {
  try {
    const { name, phone, email } = req.body;

    const cleanPhone = phone.replace(/\D/g, "");

    if (!name || !cleanPhone) {
      return res.status(400).json({
        message: "Name and Phone are required ❗",
      });
    }

    const existing = await Enquiry.findOne({ phone: cleanPhone });

    if (existing) {
      return res.status(400).json({
        message: "You already submitted enquiry ❗",
      });
    }

    const newEnquiry = new Enquiry({
      name,
      phone: cleanPhone,
      email,
    });

    await newEnquiry.save();

    res.status(200).json({
      message: "Enquiry submitted successfully ✅",
    });

  } catch (err) {
    console.log(err);

    if (err.code === 11000) {
      return res.status(400).json({
        message: "You already submitted enquiry ❗",
      });
    }

    res.status(500).json({
      message: "Server error ❌",
    });
  }
});

// PORT FIX
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});