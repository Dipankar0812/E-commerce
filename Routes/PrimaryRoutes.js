const express = require("express");
const Router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });

const {
  getAllCategory,
  postCategoryController,
  getAllProductCategory,
  allCategoryAndProduct,
} = require("../Controller/CategoryController");
const {
  postProductController,
  getAllProduct,
} = require("../Controller/ProductController");
const { RegisterUser } = require("../Controller/RegisterController");
Router.get("/getAllProduct", getAllProduct);
Router.post(
  "/postProductController",
  upload.single("productImage"),
  postProductController
);
Router.get("/getAllCategory", getAllCategory);
Router.post("/postCategoryController", postCategoryController);
Router.get("/getAllProductCategory/:id", getAllProductCategory);
Router.get("/allCategoryAndProduct", allCategoryAndProduct);
Router.post("/RegisterUser", RegisterUser);
module.exports = Router;
