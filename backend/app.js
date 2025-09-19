const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const categoryRoutes = require("./routes/category")

app.use(express.json()); // es line ki help se ham json formate me data ko server me bhej payenge
app.get("/", (req, res) => {
    res.send("Hello Nihal, Server running");
});

app.use("/category",categoryRoutes);
async function connectDb() {
    await mongoose.connect("mongodb://localhost:27017", {
        dbName: "IJCC-store"
    });
}
connectDb().catch((err) => {
    console.error(err);
})

app.listen(port, () => {
    console.log("server running on port", port);
});
