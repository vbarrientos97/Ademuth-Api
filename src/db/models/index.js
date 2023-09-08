const { Person, PersonSchema } = require("./persons.model");
const {
  PurchaseOrder,
  PurchaseOrderSchema,
} = require("./purchase-orders.model");
const { Product, ProductSchema } = require("./products.model");
const { Color, ColorSchema } = require("./colors.model");
const { LocalDesign, LocalDesignSchema } = require("./local-designs.model");
const { Tshirt, TshirtSchema } = require("./tshirts.model");
const { Teeprice, TeepriceSchema } = require("./teeprice.model");

function setupModels(sequelize) {
  Person.init(PersonSchema, Person.config(sequelize));
  PurchaseOrder.init(PurchaseOrderSchema, PurchaseOrder.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Color.init(ColorSchema, Color.config(sequelize));
  LocalDesign.init(LocalDesignSchema, LocalDesign.config(sequelize));
  Tshirt.init(TshirtSchema, Tshirt.config(sequelize));
  Teeprice.init(TeepriceSchema, Teeprice.config(sequelize));
}

module.exports = setupModels;
