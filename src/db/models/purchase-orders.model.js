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
  customerName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "customerName",
  },
  customerLastname: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "customerLastname",
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
  demoDesign: {
    allowNull: true,
    type: DataTypes.TEXT,
    field: "demoDesign",
  },
};

module.exports = { PurchaseOrder, PurchaseOrderSchema };
