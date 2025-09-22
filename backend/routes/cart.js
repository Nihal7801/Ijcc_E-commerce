const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// routes import
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
const cartRoutes = require("./routes/cart");   // ✅ yeh add karo

app.use(express.json());

// default route
app.get("/", (req, res) => {
  res.send("Hello Nihal, Server running");
});

// use routes
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);
app.use("/api/cart", cartRoutes);   // ✅ yeh add karo

// connect mongo
async function connectDb() {
  await mongoose.connect("mongodb://localhost:27017", {
    dbName: "IJCC-store"
  });
}
connectDb().catch((err) => console.error(err));

app.listen(port, () => {
  console.log("🚀 Server running on port", port);
});
