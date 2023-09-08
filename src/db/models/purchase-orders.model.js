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
    primaryKey: true,
    type: DataTypes.STRING,
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
  products: {
    type: DataTypes.ARRAY(DataTypes.JSONB),
    field: "products",
  },
  totalPrice: {
    allowNull: true,
    type: DataTypes.DECIMAL,
    field: "totalPrice",
  },
};

module.exports = { PurchaseOrder, PurchaseOrderSchema };
