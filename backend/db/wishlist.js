const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    productId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }]
}, { timestamps: true });

const Wishlist = mongoose.model("wishlists", wishlistSchema);

module.exports = Wishlist;
