const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Category = sequelize.define(
  "Category",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "category",
  }
);

module.exports = Category;
