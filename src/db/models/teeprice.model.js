const { Model, DataTypes } = require("sequelize");

const TEEPRICE_TABLE = "teeprice";

class Teeprice extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: TEEPRICE_TABLE,
      modelName: "Teeprice",
      timestamp: true,
    };
  }
}

const TeepriceSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  teeprice: {
    allowNull: true,
    type: DataTypes.DECIMAL,
    field: "teeprice",
  },
};

module.exports = { Teeprice, TeepriceSchema };
