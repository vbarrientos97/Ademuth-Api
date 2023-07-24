const { Person, PersonSchema } = require("./persons.model");
const {
  PurchaseOrder,
  PurchaseOrderSchema,
} = require("./purchase-orders.model");
const { Product, ProductSchema } = require("./products.model");

function setupModels(sequelize) {
  Person.init(PersonSchema, Person.config(sequelize));
  PurchaseOrder.init(PurchaseOrderSchema, PurchaseOrder.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
}

module.exports = setupModels;
