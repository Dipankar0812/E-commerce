const Category = require("../Models/CategoryModel");
const Product = require("../Models/ProductsModel");
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
    const allCategory = await Category.findAll({
      attributes: ["id", "categoryName", "categoryDescription"],
    });
    return res.status(200).json(allCategory);
  } catch (error) {
    return res
      .status(500)
      .json({ msg: `Internal Server Error: ${error.message}` });
  }
};

const getAllProductCategory = async (req, res) => {
  try {
    const allProductCategory = await Category.findAll({
      where: { id: req.params.id },
      attributes: ["id", "categoryName", "categoryDescription"],
      include: [
        {
          model: Product,
          as: "product",
          attributes: ["id", "productName", "productDescription"],
        },
      ],
    });
    return res.status(200).json(allProductCategory);
  } catch (error) {
    return res.status(500).json(`Internal Server Error ${error}`);
  }
};
const allCategoryAndProduct = async (req, res) => {
  try {
    const allCP = await Category.findAll({
      attributes: ["id", "categoryName", "categoryDescription"],
      include: [
        {
          model: Product,
          as: "product",
          attributes: ["id", "productName", "productDescription"],
        },
      ],
    });
    return res.status(200).json(allCP);
  } catch (error) {
    return res.status(500).json(`Internal Server Error ${error}`);
  }
};
module.exports = {
  postCategoryController,
  getAllCategory,
  getAllProductCategory,
  allCategoryAndProduct,
};
