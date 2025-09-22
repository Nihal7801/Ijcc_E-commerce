const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 1,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // ✅ Relation with Category
      required: true,
    },
    images: [
      {
        type: String, // store image URL/path
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
