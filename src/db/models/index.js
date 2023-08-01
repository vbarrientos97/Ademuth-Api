const { Person, PersonSchema } = require("./persons.model");
const {
  PurchaseOrder,
  PurchaseOrderSchema,
} = require("./purchase-orders.model");
const { Product, ProductSchema } = require("./products.model");
const { Color, ColorSchema } = require("./colors.model");
const { LocalDesign, LocalDesignSchema } = require("./local-designs.model");

function setupModels(sequelize) {
  Person.init(PersonSchema, Person.config(sequelize));
  PurchaseOrder.init(PurchaseOrderSchema, PurchaseOrder.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Color.init(ColorSchema, Color.config(sequelize));
  LocalDesign.init(LocalDesignSchema, LocalDesign.config(sequelize));
}

module.exports = setupModels;
