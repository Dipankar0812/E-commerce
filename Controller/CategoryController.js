const Category = require("../Models/CategoryModel");

const postCategoryController = async (req, res) => {
  const { categoryName, categoryDescription } = req.body;

  try {
    if (!categoryDescription || !categoryName) {
      return res.status(400).json({ msg: "Enter all the data" });
    }

    const category = await Category.create({
      categoryName,
      categoryDescription,
    });

    return res.status(200).json(category);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: `Internal Server Error: ${error.message}` });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const allCategory = await Category.findAll();
    return res.status(200).json(allCategory);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: `Internal Server Error: ${error.message}` });
  }
};

module.exports = { postCategoryController, getAllCategory };
