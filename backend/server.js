const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());


// ✅ MongoDB Atlas Connection
mongoose.connect("mongodb+srv://tanish:Tanish123@cluster0.ftfutee.mongodb.net/realestate")
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch(err => console.log(err));


// ✅ Schema
const enquirySchema = new mongoose.Schema({
  name: String,
  phone: {
    type: String,
    required: true,
    unique: true, 
  },
  email: {
    type: String,
  
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Enquiry = mongoose.model("Enquiry", enquirySchema);


// ✅ API Route
app.post("/api/enquiry", async (req, res) => {
  try {
    const { name, phone, email } = req.body;

    // 🔥 Normalize phone (important)
    const cleanPhone = phone.trim();

    // 🔥 Check existing
    const existing = await Enquiry.findOne({
      phone: cleanPhone,
    });

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
      message: "Saved successfully ✅",
    });

  } catch (err) {
  console.log(err);

  // 🔥 Handle duplicate error cleanly
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


// ✅ Server Start
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});