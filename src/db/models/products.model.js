const { Model, DataTypes } = require("sequelize");

const PRODUCT_TABLE = "products";

class Product extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: "Product",
      timestamp: true,
    };
  }
}

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "name",
  },
  size: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "size",
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "description",
  },
  price: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: "price",
  },
  amount: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: "amount",
  },
  photoURL: {
    allowNull: true,
    type: DataTypes.TEXT,
    field: "photoURL",
  },
};

module.exports = { Product, ProductSchema };
