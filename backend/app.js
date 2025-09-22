const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const categoryRoutes = require("./routes/category");
app.use("/api/category", categoryRoutes);

// Default Route
app.get("/", (req, res) => {
    res.send("Hello Nihal, Server running 🚀");
});

// Product route
const productRoutes = require("./routes/product");
app.use("/api/product", productRoutes);

// cart route
const cartRoutes = require("./routes/cart");
app.use("/api/cart", cartRoutes);

// user routes
const userRoutes = require("./routes/user");
app.use("/api/user", userRoutes);


// Database Connection
async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB connected successfully");
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err.message);
    }
}
connectDb();

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
