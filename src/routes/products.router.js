const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

router
  .get("/", productsController.get)
  .get("/:id", productsController.getById)
  .post("/", productsController.create)
  .put("/:id", productsController.update)
  .delete("/:id", productsController._delete);

module.exports = router;
