const { Model, DataTypes } = require("sequelize");

const COLOR_TABLE = "colors";

class Color extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: COLOR_TABLE,
      modelName: "Color",
      timestamp: true,
    };
  }
}

const ColorSchema = {
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
  code: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "code",
  },
};

module.exports = { Color, ColorSchema };
