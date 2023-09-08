const express = require("express");
const router = express.Router();
const teepriceController = require("../controllers/teeprice.controller");

router
  .get("/", teepriceController.get)
  .get("/:id", teepriceController.getById)
  .post("/", teepriceController.create)
  .put("/:id", teepriceController.update);

module.exports = router;
