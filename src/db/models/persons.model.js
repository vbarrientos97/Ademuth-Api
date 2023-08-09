const { Model, DataTypes } = require("sequelize");

const PERSON_TABLE = "persons";

class Person extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PERSON_TABLE,
      modelName: "Person",
      timestamp: true,
    };
  }
}

const PersonSchema = {
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
  lastname: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "lastname",
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "email",
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "username",
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "password",
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "phone",
  },
  isAdmin: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "isAdmin",
  },
};

module.exports = { Person, PersonSchema };
