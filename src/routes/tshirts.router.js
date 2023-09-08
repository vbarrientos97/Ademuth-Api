const express = require("express");
const router = express.Router();
const tshirtsController = require("../controllers/tshirts.controller");

router
  .get("/", tshirtsController.get)
  .get("/:id", tshirtsController.getById)
  .post("/", tshirtsController.create)
  .put("/:id", tshirtsController.update)
  .delete("/:id", tshirtsController._delete);
module.exports = router;
