const express = require("express");

const personsRouter = require("./persons.router");
const purchaseOrdersRouter = require("./purchase-orders.router");
const productsRouter = require("./products.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/persons", personsRouter);
  router.use("/purchaseOrders", purchaseOrdersRouter);
  router.use("/products", productsRouter);
}

module.exports = routerApi;
