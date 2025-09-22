const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// ✅ Category Schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        default: ""
    }
}, { timestamps: true });

const Category = mongoose.model("Category", categorySchema);

// ✅ Create Category
router.post("/", async (req, res) => {
    try {
        const { name, description } = req.body;
        const category = new Category({ name, description });
        await category.save();
        res.status(201).json({ message: "Category created successfully", category });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// ✅ Get All Categories
router.get("/", async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Get Single Category by ID
router.get("/:id", async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).json({ message: "Category not found" });
        res.json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Update Category
router.put("/:id", async (req, res) => {
    try {
        const { name, description } = req.body;
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            { name, description },
            { new: true, runValidators: true }
        );
        if (!category) return res.status(404).json({ message: "Category not found" });
        res.json({ message: "Category updated successfully", category });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// ✅ Delete Category
router.delete("/:id", async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) return res.status(404).json({ message: "Category not found" });
        res.json({ message: "Category deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
