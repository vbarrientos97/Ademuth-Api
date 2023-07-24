const { Model, DataTypes } = require("sequelize");

const PURCHASE_ORDER_TABLE = "purchaseOrders";

class PurchaseOrder extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PURCHASE_ORDER_TABLE,
      modelName: "PurchaseOrder",
      timestamp: true,
    };
  }
}

const PurchaseOrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  customer: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "customer",
  },
  article: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "article",
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
  image: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "image",
  },
  amount: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: "amount",
  },
};

module.exports = { PurchaseOrder, PurchaseOrderSchema };
