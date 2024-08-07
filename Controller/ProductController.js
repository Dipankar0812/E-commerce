const Product = require("../Models/ProductsModel");
const postProductController = async (req, res) => {
  const { productName, productDescription, categoryId } = req.body;
  const productImage = req.file ? req.file.filename : null;
  try {
    if (!productDescription || !productName) {
      return res.status(400).json({ msg: "Enter all the data" });
    }
    if (!categoryId) {
      return res.status(404).json({ msg: "Category is not defined" });
    }
    const product = await Product.create({
      productName,
      productDescription,
      categoryId,
      productImage,
    });

    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: `Internal Server Error: ${error.message}` });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const allProduct = await Product.findAll();
    return res.status(200).json(allProduct);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: `Internal Server Error: ${error.message}` });
  }
};

module.exports = { postProductController, getAllProduct };
