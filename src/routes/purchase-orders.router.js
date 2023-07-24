const express = require("express");
const router = express.Router();
const purchaseOrdersController = require("../controllers/purchase-orders.controller");

router
  .get("/", purchaseOrdersController.get)
  .get("/:id", purchaseOrdersController.getById)
  .post("/", purchaseOrdersController.create)
  .put("/:id", purchaseOrdersController.update)
  .delete("/:id", purchaseOrdersController._delete);

module.exports = router;
