const { Model, DataTypes } = require("sequelize");

const TSHIRT_TABLE = "tshirts";

class Tshirt extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: TSHIRT_TABLE,
      modelName: "Tshirt",
      timestamp: true,
    };
  }
}

const TshirtSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  size: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "size",
  },
  color: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "color",
  },
  localDesign: {
    allowNull: true,
    type: DataTypes.TEXT,
    field: "localDesign",
  },
  customDesign: {
    allowNull: true,
    type: DataTypes.TEXT,
    field: "customDesign",
  },
  amount: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: "amount",
  },
  comments: {
    allowNull: true,
    type: DataTypes.TEXT,
    field: "comments",
  },
  price: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: "price",
  },
  demoDesign: {
    allowNull: true,
    type: DataTypes.TEXT,
    field: "demoDesign",
  },
};

module.exports = { Tshirt, TshirtSchema };
