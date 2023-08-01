const { Model, DataTypes } = require("sequelize");

const LOCAL_DESIGN_TABLE = "localDesigns";

class LocalDesign extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: LOCAL_DESIGN_TABLE,
      modelName: "LocalDesign",
      timestamp: true,
    };
  }
}

const LocalDesignSchema = {
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
  image: {
    allowNull: true,
    type: DataTypes.TEXT,
    field: "image",
  },
};

module.exports = { LocalDesign, LocalDesignSchema };
