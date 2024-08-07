const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");
const Category = require("./CategoryModel");
const Product = sequelize.define(
  "Product",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: "id",
      },
    },
    productImage: { type: DataTypes.STRING, allowNull: false },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "product",
  }
);
Category.hasMany(Product, { foreignKey: "categoryId", as: "product" });
Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });
module.exports = Product;
