const express = require("express");
const Router = express.Router();
const {
  getAllCategory,
  postCategoryController,
} = require("../Controller/CategoryController");

Router.get("/getAllCategory", getAllCategory);
Router.post("/postCategoryController", postCategoryController);

module.exports = Router;
