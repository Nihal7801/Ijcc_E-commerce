const Category = require("./../db/category");

// Add Category
async function addCategory(model) {
    try {
        let category = new Category({
            name: model.name,
        });
        await category.save();
        return category.toObject();
    } catch (err) {
        throw new Error("Error while adding category: " + err.message);
    }
}

// Update Category
async function updateCategory(id, model) {
    try {
        let updatedCategory = await Category.findOneAndUpdate(
            { _id: id },
            model,
            { new: true } // ✅ latest updated category return karega
        );
        return updatedCategory ? updatedCategory.toObject() : null;
    } catch (err) {
        throw new Error("Error while updating category: " + err.message);
    }
}

// Delete Category
// Delete Category
async function deleteCategory(id) {
    try {
        let deletedCategory = await Category.findOneAndDelete({ _id: id });
        return deletedCategory ? deletedCategory.toObject() : null;
    } catch (err) {
        throw new Error("Error while deleting category: " + err.message);
    }
}


module.exports = { addCategory, updateCategory , deleteCategory};
