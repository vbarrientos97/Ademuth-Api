const express = require("express");

const personsRouter = require("./persons.router");
const purchaseOrdersRouter = require("./purchase-orders.router");
const productsRouter = require("./products.router");
const colorsRouter = require("./colors.router");
const localDesignsRouter = require("./local-designs.router");
const tshirtsRouter = require("./tshirts.router");
const uploadRouter = require("./upload.router");
const teepriceRouter = require("./teeprice.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/persons", personsRouter);
  router.use("/purchaseOrders", purchaseOrdersRouter);
  router.use("/products", productsRouter);
  router.use("/colors", colorsRouter);
  router.use("/localDesigns", localDesignsRouter);
  router.use("/tshirts", tshirtsRouter);
  router.use("/upload", uploadRouter);
  router.use("/teeprice", teepriceRouter);
}

module.exports = routerApi;
